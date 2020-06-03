import tokenService from './tokenService'
const BASE_URL = '/api/user/';

export default {
    signup,
    getUser,
    logout,
    login
}

function login(creds){
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(creds)
    }).then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad credentials')
    }).then(({token}) => tokenService.setToken(token))
}

function getUser(){
    return tokenService.getUserFromToken()
}

function logout(){
    tokenService.removeToken()
}

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Username already taken')
    })
    .then(({token}) => tokenService.setToken(token))
}