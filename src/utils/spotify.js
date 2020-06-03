import tokenService from '../utils/tokenService'

export default {
    recentlyPlayed
}

function recentlyPlayed(query){
        return fetch('https://api.spotify.com/v1/me/player/recently-played?type=track&limit=10&after=1590216513000', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + query,
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