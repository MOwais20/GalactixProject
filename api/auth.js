export default ($axios, store, ctx) => ({

  async setToken() {
    $axios.setToken(`Bearer ${localStorage.getItem("token")}`);
  },

  async resend_code(params) {
    return ctx.$fetch.request.post('/api/auth/resend_code', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async verify_code(params) {
    return ctx.$fetch.request.post('/api/auth/verify_code', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async signUp(params) {
    return ctx.$fetch.request.post('/api/auth/register',  params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async loginViaPhone(params) {
    return ctx.$fetch.request.post('/api/auth/login_with_phone_number', params )
      .then(response => {
        if (response && response.data && response.data.access_token) {
          localStorage.setItem("token", response.data.access_token);
          // Set user in local stoarge.
          localStorage.setItem("gooex_user", response.data.user);
        }
        // Updating Token
        this.setToken();
        return response 
      })
      .catch(error => { throw error });
  },

  async loginViaEmail(params) {
    return ctx.$fetch.request.post('/api/auth/login_with_email',  params )
      .then(response => { 
        if (response && response.data && response.data.access_token) { 
          localStorage.setItem("token", response.data.access_token); 
           // Set user in local stoarge.
           localStorage.setItem("gooex_user", JSON.stringify(response.data.user));
        }
        // Updating Token
        this.setToken();
        return response 
       })
      .catch(error => { throw error });
  },

  async logout() {
    return ctx.$fetch.request.post('/api/auth/logout')
      .then(response => {
        localStorage.removeItem("token"); 
        localStorage.removeItem("gooex_user"); 
        // Removes default Authorization header from `common` scope (all requests)
        $axios.setToken(false);
        return response;
      })
      .catch(error => { throw error });
  },

  async resetAccess_token(params) {
    return ctx.$fetch.request.get('/api/auth/refresh', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async resetPassword(params) {
    return ctx.$fetch.request.post('/api/auth/reset_pass', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },

  async forgotPassword(params) {
    return ctx.$fetch.request.post('/api/auth/forgot_pass', params )
      .then(response => { return response })
      .catch(error => { throw error });
  },
})