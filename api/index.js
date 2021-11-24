import authService from '~/api/auth';
import userService from '~/api/user';
import marketService from '~/api/Market';
import orderService from '~/api/Order';

export default ($axios) => ({
  authService: authService($axios),
  userService: userService($axios),
  marketService: marketService($axios),
  orderService: orderService($axios)
})