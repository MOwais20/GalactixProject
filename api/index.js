import authService from '~/api/auth';
import userService from '~/api/user';

export default ($axios) => ({
  authService: authService($axios),
  userService: userService($axios),
})