import tokenService from '../utils/tokenService'
const BASE_URL = '/api/music/'

export default {
    recentlyPlayed,
    saveRP,
    getRecentlyPlayed,
    searchMusic,
    getPlaylist,
    addToPlaylist,
}

function addToPlaylist(query, id, uri){
    return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?uris=${uri}`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + query,
        })
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
        console.log(error)
    })
}

function getPlaylist(query){
    return fetch(`https://api.spotify.com/v1/me/playlists`, {
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

function searchMusic(query, search){
    // console.log(query)
    // console.log(search)
    const limit = 8
    return fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=${limit}`, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + query,
    }
    })
    .then(res => res.json())
    .then(data => 
        data.tracks.items
    )
    .catch(error => {
        window.location="http://localhost:3001/api/search/login"
    })
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