import authService from '~/api/auth';
import userService from '~/api/user';
import Market from '~/api/Market';
import orderService from '~/api/Order';

export default ($axios) => ({
  authService: authService($axios),
  userService: userService($axios),
  Market: Market($axios),
  orderService: orderService($axios)
})