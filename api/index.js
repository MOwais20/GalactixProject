import authService from '~/api/auth'
import Market from '~/api/Market'

export default ($axios) => ({
  authService: authService($axios),
  Market: Market($axios),
})