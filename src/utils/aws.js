export default {
    getSongs        
}

function getSongs(){
    return fetch('/api/music/songs')
    .then(resp => resp.json())
    .then(data => data)
}
