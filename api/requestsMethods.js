export default ($axios) => ({

    async get(url, params) {
        return await $axios.$get(url, params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async post(url, params) {
        return await $axios.$post(url, params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async put(url, params) {
        return await $axios.$put(url, params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async deleteReq(url) {
        return await $axios.$delete(url)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async patch(url, params) {
        return await $axios.$patch(url, params);
    }
})