import './App.css'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactLocation, Route, Router } from '@tanstack/react-location'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from 'notistack'
import { lazy } from 'react'
import AuditTrail from './components/auditTrail/AuditTrail'
import ErrorBoundary from './components/error/ErrorBoundary'
import NotFound from './components/error/NotFound'
import HomePage from './components/home/HomePage'
import Import from './components/import/Import'
import LinkedRecords from './components/linkedRecords/LinkedRecords'
import PatientDetails from './components/patient/PatientDetails'
import MatchDetails from './components/reviewMatches/MatchDetails'
import ReviewMatches from './components/reviewMatches/ReviewMatches'
import SimpleSearch from './components/search/SimpleSearch'
import Shell from './components/shell/Shell'
import { AppConfigProvider } from './hooks/useAppConfig'
import ApiClient from './services/ApiClient'
import theme from './theme'

const location = new ReactLocation()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {}
  }
})

const ReactLocationDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/react-location-devtools').then(res => ({
          default: res.ReactLocationDevtools
        }))
      )

const routes: Route[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/review-matches',
    element: <ReviewMatches />
  },
  {
    path: '/patient/:uid/linked-records',
    element: <LinkedRecords />
  },
  {
    path: '/patient/:uid/audit-trail',
    element: <AuditTrail />,
    loader: async ({ params }) => ({
      uid: params.uid
    })
  },
  {
    path: '/match-details',
    element: <MatchDetails />
  },
  { path: '/search', element: <SimpleSearch /> },
  { path: '/import', element: <Import /> },
  {
    path: '/patient/:uid',
    element: <PatientDetails />,
    loader: async ({ params }) => ({
      uid: params.uid,
      patient: await ApiClient.getPatient(params.uid)
    })
  },
  { element: <NotFound /> }
]

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Router location={location} routes={routes}>
          <SnackbarProvider
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <ErrorBoundary>
              <AppConfigProvider>
                <Shell />
              </AppConfigProvider>
            </ErrorBoundary>
          </SnackbarProvider>
          <ReactLocationDevtools position="bottom-right" />
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
