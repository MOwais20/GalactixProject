export default function ({ redirect, store }) {

    store.commit('wallet/loadBalance');


    // const isAuthenticated = store.state.auth.user ? true : false
    // if (!isAuthenticated) {
    //     redirect({ name: 'auth' })
    // }
}