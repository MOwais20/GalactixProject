export default ($axios) =>({
    async getListlaunch(params) {
        return await $axios.$get(`/api/launchpad?type=${params}`)
          .then(response => {  return response })
          .catch(error => { throw error });
    },
    async getLaunchpad(params) {
        return await $axios.$get(`/api/launchpad/show/${params}`)
          .then(response => {  return response })
          .catch(error => { throw error });
    }
})