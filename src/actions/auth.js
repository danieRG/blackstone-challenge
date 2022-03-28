import { types } from "../types/types";
import tweetsApi from "../api/api"

export const startLogin = (email, password) => {
    return(dispatch) => {
        tweetsApi.post('/api/login',{
            email: email,
            password: password
        }).then(res => {
           dispatch(login(res.data.displayName))
           localStorage.setItem('token', res.data.token)
        })
    }
}

export const login = (displayName) => {
    return{
        type: types.login,
        payload: displayName
    }
}

export const startLogout = () => {
    return(dispatch) => {
        dispatch(logout())
        localStorage.removeItem('token')
    }
}

export const logout = () => {
    return{
        type: types.logout,
        payload: ''
    }
}