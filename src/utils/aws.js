export default {
    getSongs,
    addTestimonial      
}

function getSongs(){
    return fetch('/api/music/songs')
    .then(resp => resp.json())
    .then(data => data)
}

function addTestimonial(content){
    return fetch('/api/testimonial/add', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(content)
    })
    .then( res => {
        if (res.ok) return res.json()
    })
    .then( data => data )
    .catch(err => {
        console.log(err)
    })
}
