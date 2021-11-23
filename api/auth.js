export default ($axios) => ({

  async setToken() {
    $axios.setToken(`Bearer ${localStorage.getItem("token")}`);
  },

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
        if (response && response.data && response.data.access_token) localStorage.setItem("token", response.data.access_token); 
        // Updating Token
        this.setToken();
        return response 
      })
      .catch(error => { throw error });
  },

  async loginViaEmail(params) {
    return await $axios.$post('/api/auth/login_with_email',  params )
      .then(response => { 
        if (response && response.data && response.data.access_token) localStorage.setItem("token", response.data.access_token); 
        // Updating Token
        this.setToken();
        return response 
       })
      .catch(error => { throw error });
  },

  async logout() {
    return await $axios.$post('/api/auth/logout')
      .then(response => {
        localStorage.removeItem("token"); 
        // Removes default Authorization header from `common` scope (all requests)
        $axios.setToken(false);
        return response;
      })
      .catch(error => { throw error });
  },

  async resetAccess_token(params) {
    return await $axios.$get('/api/auth/refresh', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async resetPassword(params) {
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