export default ($axios, store, ctx) => ({
    async getCurrencyById(id) {
      return await $axios.$get(`/api/currencies/show/${id}`)
        .then(response => { return response })
        .catch(error => { throw error });
    },
    async getCurrencyList() {
      return ctx.$fetch.request.get('/api/currencies')
        .then(response => { return response })
        .catch(error => { throw error });
    },
  })