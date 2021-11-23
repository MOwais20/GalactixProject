export default ($axios) => ({
    async order_opening(params) {
        return await $axios.$get('/api/trading/orderOpen', params )
          .then(response => { return response })
          .catch(error => { throw error });
    },
    async order_history(params) {
        return await $axios.$get('/api/trading/orderHistory', params )
          .then(response => { return response })
          .catch(error => { throw error });
    },
})