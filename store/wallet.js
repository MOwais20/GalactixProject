const state = () => ({
    balance: 0,
})

const getters = {
    getBalance(state) {
        return state.balance;
    }
}

const mutations = {
    setBalance(state, payload) {
        state.balance = payload;
    },
    addBalance(state, payload) {
        state.balance += payload;
    },
}

const actions = {
    // async nuxtServerInit({ commit }) {
    //     await this.$api.userService.getUserBalance(loginWithEmail)
    //     .then(response => { 
    //         console.log('Resp', response);
    //         return response
    //      })


    //     commit('setAirports', data)
    // },
    loadBalance({ commit }) {

        this.$api.userService.getUserBalance()
            .then(response => {
                console.log('Resp', response.data);

                // Todo - Set Balance Here
                // commit('setBalance', payload)
            })

    },
    setBalance({ commit }, payload) {
        commit('setBalance', payload);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}