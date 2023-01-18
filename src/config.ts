export const config = {
  isDev: process.env.NODE_ENV === 'production',
  apiUrl:
    process.env.REACT_APP_JEMPI_BASE_URL || 'http://localhost:50000/JeMPI',
  shouldMockBackend: process.env.REACT_APP_MOCK_BACKEND || false,
  KeyCloakUrl: process.env.KC_FRONTEND_URL || 'http://localhost:9080',
  KeyCloakRealm: process.env.KC_REALM_NAME || 'platform-realm',
  KeyCloakClientId: process.env.KC_JEMBI_CLIENT_ID || 'jempi-oauth'
}
