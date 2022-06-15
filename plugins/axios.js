
export default function ({ $axios, redirect, $toast }) {
    $axios.setToken(`Bearer ${localStorage.getItem("token")}`);

    $axios.onRequest(config => {
        window.$nuxt.$loading.start();
        return config;
    })

    $axios.onError(error => {
        window.$nuxt.$loading.finish()
        // $toast.error(`${error && error.response && error.response.data && error.response.data.message || 'Error'}`)
        // if (error && error.response && error.response.status === 401 || error.response.data.message == 'TOKEN_IS_INVALID') {
        //    redirect('/login')
        // }
    })

    $axios.onResponseError(error => {
        window.$nuxt.$loading.finish()
        // $toast.error(`${error && error.response && error.response.data && error.response.data.message || 'Error'}`)
        // if (error && error.response && error.response.status === 401 || error.response.data.message == 'TOKEN_IS_INVALID') {
        //     redirect('/login')
        // }
    })

    $axios.onResponse(response => {
        window.$nuxt.$loading.finish()
        // if(response && response.data && response.data.status) {
        //     let httpsStatus = response.data.status;
        //     if (httpsStatus.toString().charAt(0) != '2') {
        //         $toast.error(`${response && response.data && response.data.message}`)
        //     }
        // }
    })
}