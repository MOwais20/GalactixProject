import { mapActions } from 'vuex';
import store from '@/store/auth.js';

export default function ({ $axios, redirect }) {
    $axios.setToken(`${localStorage.getItem("token")}`)
    $axios.onError(error => {
        console.log('error', error.response);
        if (error && error.response && error.response.status === 401) {
            console.log('Store21', mapActions('auth', ['refreshToken']), store);
            // store.mutations.refreshToken()
            store.dispatch('refreshToken');
           // redirect('/login')
        }
    })

    $axios.onResponseError(error => {
        if (error && error.response && error.response.status === 401) {
            mapActions('auth', ['refreshToken']);
            //redirect('/login')
        }
    })

    $axios.onResponse(response => {
        // Do things u needed.
    })
}