export default ($axios, ctx) => ({

    async getUserProfile(params) {
        return await $axios.$get('/api/profile', params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async twofa(params) {
        return await $axios.$post('/api/profile/twofa', params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async requestKYC(params) {
        return await $axios.$get('/api/profile/kyc', params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async uploadKycImg(params) {
        return await $axios.$post('/api/profile/kycUpload', params, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async changePassword(params) {
        return await $axios.$post('/api/profile/change-pass', params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async getUserBalance(params) {
        return await $axios.$get('/api/user/balance', params)
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async uploadAvatar(params) {
        return await $axios.$post('/api/profile/upload-avatar', params, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
            .then(response => { return response })
            .catch(error => { throw error });
    },

    async profileSettings(params) {
        return ctx.$fetch.request.post('/api/profile/settings', params)
            .then(response => { return response })
            .catch(error => { throw error });
    },
})