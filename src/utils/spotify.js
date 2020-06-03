import tokenService from '../utils/tokenService'
import queryString from 'query-string'
const BASE_URL = 'api/music'

export default {
    login,
    recentlyPlayed
}

function login(){
    return fetch (BASE_URL + '/login')
    .then(res => res.json())
    .then(res => console.log(res))

}

function recentlyPlayed(){
    let query = queryString.parse(window.location.search)
        if(Object.keys(query).length !== 0){
        return fetch('https://api.spotify.com/v1/me/player/recently-played?type=track&limit=10&after=1590216513000', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + query.access_token,
        }
        })
        .then(response => response.json())
        .then(data => 
            console.log(data)
        )
        .catch(error => {
            console.log(error)
        })
    }
}