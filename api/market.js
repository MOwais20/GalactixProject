export default ($axios, store, ctx) => ({
  async favorites_market(params) {
    return ctx.$fetch.request.get('/api/markets/favorites', params);
  },
  get_markets(params) {
    return ctx.$fetch.request.get('/api/markets', params);
  },
})