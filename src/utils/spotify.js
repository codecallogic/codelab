import tokenService from '../utils/tokenService'
import queryString from 'query-string'
import axios from 'axios'
const BASE_URL = '/api/music/'
const proxyurl = "https://cors-anywhere.herokuapp.com/"

export default {
    recentlyPlayed
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