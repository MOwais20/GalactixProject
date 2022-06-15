export default ($axios, store, ctx) => ({
  async order_opening(params) {
    return ctx.$fetch.request.get('/api/trading/orderOpen', params)
      .then(response => { return response })
      .catch(error => { throw error });
  },
  async order_history(params) {
    return ctx.$fetch.request.get('/api/trading/orderHistory', params)
      .then(response => { return response })
      .catch(error => { throw error });
  },
}) 
