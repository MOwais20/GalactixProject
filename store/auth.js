const state = () => ({
    loginCredentials: null,
    email: null,
    phone: {
        countryCode: null,
        number: null,
    },
    emailSelected: true, // Represents wether email or phoneNumber selected
    twofaDialog: false,
})

const getters = {
    getLoginDetails(state) {
        return state.loginCredentials;
    },
    getEmail(state) {
        return state.email;
    },
    getCountryCode(state) {
        return state.phone.countryCode;
    },
    getPhoneNumber(state) {
        return state.phone.number;
    },
    emailSelected(state) {
        return state.emailSelected;
    },
    twofaDialog(state) {
        return state.twofaDialog;
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
    },
    setEmail(state, payload) {
        state.email = payload;
    },
    setCountryCode(state, payload) {
        state.phone.countryCode = payload
    },
    setPhoneNumber(state, payload) {
        state.phone.number = payload
    },
    setEmailSelected(state, payload) {
        state.emailSelected = payload
    },
    initTwofaDialog(state, payload) {
        state.twofaDialog = payload
    }
}

const actions = {
    initTwofaDialog({ commit }, payload) {
        commit('initTwofaDialog', payload);
    },
    setloginDetails({ commit }, payload) {
        commit('setloginDetails', payload);
    },
    logout({ commit }) {
        commit('logout');
    },
    refreshToken({ commit }) {
        commit('refreshToken');
    },
    setEmail({ commit }, payload) {
        commit('setEmail', payload);
    },
    setCountryCode({ commit }, payload) {
        commit('setCountryCode', payload);
    },
    setPhoneNumber({ commit }, payload) {
        commit('setPhoneNumber', payload);
    },
    setEmailSelected({ commit }, payload) {
        commit('setEmailSelected', payload);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}