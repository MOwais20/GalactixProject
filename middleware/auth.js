export default function ({ redirect, route }) {

    if (!(['/login', '/signUp'].includes(route.path))) {
        const isAuthenticated = localStorage.getItem("token") ? true : false;
        if (!isAuthenticated) {
            redirect('/login')
        }
    }

}