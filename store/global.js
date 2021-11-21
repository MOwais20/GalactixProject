const state = () => ({
    darkMode: false,
})

const getters = {
    darkMode(state) {
        return state.darkMode;
    }
}

const mutations = {
    toggleDarkMode(state, payload) {
        state.darkMode = payload;
    }
}

const actions = {
    toggleDarkMode({ commit }, payload) {
        commit('toggleDarkMode', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}