import authService from '~/api/auth';
import userService from '~/api/user';
import Market from '~/api/Market';

export default ($axios) => ({
  authService: authService($axios),
  userService: userService($axios),
  Market: Market($axios),
})