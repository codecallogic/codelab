import tokenService from '../utils/tokenService'
const BASE_URL = '/api/music/'

export default {
    recentlyPlayed,
    saveRP,
    getRecentlyPlayed
}

function recentlyPlayed(query){
    const pastTwoDays = Date.now() - (1000 * 60 * 60 * 24 * 1)
    const limit = 10
    return fetch(`https://api.spotify.com/v1/me/player/recently-played?type=track&limit=${limit}&after=${pastTwoDays}`, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + query,
    }
    })
    .then(res => res.json())
    .then(data => data.items)
    .catch(error => {
        console.log(error)
    })
}


function saveRP(data){
    return fetch(BASE_URL + 'saveRP', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({'recentlyPlayed': data})
    }).then( res => {
        if (res.ok) return res.json();
        throw new Error('Bad request')
    }).then( data => data)
}

function getRecentlyPlayed(){
    return fetch(BASE_URL + 'recentlyPlayed', {
        method: 'GET'
    }).then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad request')
    }).then(tracks => tracks)
}