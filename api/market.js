export default ($axios) =>({
    async favorites_market(params) {
        return await $axios.$get('/api/markets/favorites', params )
          .then(response => {  return response })
          .catch(error => { throw error });
    },
    async get_markets(params) {
        return await $axios.$get('/api/markets', params )
          .then(response => {  return response })
          .catch(error => { throw error });
    },
})