import authService from '~/api/auth';
import userService from '~/api/user';
import marketService from '~/api/market';
import orderService from '~/api/order';
import currencyService from '~/api/currencies';

export default ($axios, store, ctx) => ({
  authService: authService($axios, store, ctx),
  userService: userService($axios, store, ctx),
  marketService: marketService($axios, store, ctx),
  orderService: orderService($axios, store, ctx),
  currencyService: currencyService($axios, store, ctx)
})

