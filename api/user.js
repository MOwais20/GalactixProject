export default ($axios) => ({

    async getUserProfile(params) {
        return await $axios.$get('/api/profile', params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

})