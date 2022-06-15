const state = () => ({
    darkMode: false,
    user: {},
    currencies: [],
})

const getters = {
    darkMode(state) {
        return state.darkMode;
    },
    user(state) {
        return state.user;
    }
}

const mutations = {
    toggleDarkMode(state, payload) {
        state.darkMode = payload;
    },
    setUser(state, payload) {
        state.user = payload;
        localStorage.setItem("gooex_user", JSON.stringify(payload));
    },
    setAvatar(state, payload) {
        if (state.user && state.user.avatar) {
            state.user.avatar = payload;
        }
    },
    setCurrencies(state, payload) {
        state.currencies = payload;
    },
}

const actions = {
    toggleDarkMode({ commit }, val) {

        let obj = {
            type: "theme_mode",
            value: val ? "dark" : "light",
        };
        this.$api.userService.profileSettings(obj).then((response) => {
            if (response.data) {
                commit('setUser', response.data)
            }
        });
        commit('toggleDarkMode', val);
    },
    async setUser({ commit }, payload) {
        await this.$api.userService.getUserProfile()
            .then(response => {
                payload = response.data
            })
        await commit('setUser', payload)
    },
    setAvatar({ commit }, payload) {
        commit('setAvatar', payload);
    },
    async getCurrencies({ commit }, payload) {
        await this.$api.currencyService.getCurrencyList()
            .then(response => {
                payload = response.data
            })
        await commit('setCurrencies', payload)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}