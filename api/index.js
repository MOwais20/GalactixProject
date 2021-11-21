import authService from '~/api/auth'

export default ($axios) => ({
  authService: authService($axios),
})