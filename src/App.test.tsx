import { act, render, screen } from '@testing-library/react'
import App from './App'

test('renders JeMPI logo', async () => {
  await act(() => {
    render(<App />)
  })
  const linkElement = screen.getByText(/JeMPI/i)
  expect(linkElement).toBeInTheDocument()
})
