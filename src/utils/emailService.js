export default {
    client,        
}

function client(email){
    return fetch('/api/user/client', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(email)
    })
    .then( res => {
        if (res.ok) return res.json()
    })
    .then( res => res)
    .catch( err => {
        console.log(err)
    })
}