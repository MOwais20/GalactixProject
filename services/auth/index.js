
export default {

    async signUp(params) {
        await $axios.post('/api/auth/register', { params })
            .then(response => { return response })
            .catch(error => { throw error });
    }



}
