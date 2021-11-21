export default ($axios) => ({

  async resend_code(params) {
    return await $axios.$post('/api/auth/resend_code', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async verify_code(params) {
    return await $axios.$post('/api/auth/verify_code', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async signUp(params) {
    return await $axios.$post('/api/auth/register',  params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async loginViaPhone(params) {
    return await $axios.$post('/api/auth/login_with_phone_number', params )
      .then(response => {
        localStorage.setItem("token", response.data.access_token); 
        return response 
      })
      .catch(error => { throw error });
  },

  async loginViaEmail(params) {
    return await $axios.$post('/api/auth/login_with_email',  params )
      .then(response => { 
        localStorage.setItem("token", response.data.access_token); 
        return response 
       })
      .catch(error => { throw error });
  },

  async logout() {
    return await $axios.$post('/api/auth/logout')
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async resetAccess_token(params) {
    return await $axios.$get('/api/auth/refresh', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async ResetPassword(params) {
    return await $axios.$post('/api/auth/reset_pass', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async forgotPassword(params) {
    return await $axios.$post('/api/auth/forgot_pass', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },
})