const state = () => ({
    loginCredentials: null,
})

const getters = {
    getLoginDetails(state) {
        return state.loginCredentials;
    }
}

const mutations = {
    logout() {
        this.$api.authService.logout()
            .then(response => {
                if (response.status == 200) {
                    console.log('working', response);
                    this.$router.push('/login')
                }
            })
            .catch(error => { throw error });
    },
    setloginDetails(state, payload) {
        state.loginCredentials = payload;
    },
    refreshToken() {
        this.$api.authService.resetAccess_token()
        .then(response => {
            console.log('Resp', response);
        })
        .catch(error => { throw error });
    }

}

const actions = {
    setloginDetails({ commit }, payload) {
        commit('setloginDetails', payload);
    },
    logout({ commit }) {
        commit('logout');
    },
    refreshToken({ commit }) {
        commit('refreshToken');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}