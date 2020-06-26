export default {
    getTestimonials,
    handleUpdate        
}

function getTestimonials(){
    return fetch('/api/testimonial/all', {
        method: 'GET',
    }).then( res => {
        if(res.ok) return res.json()
    }).then( data => data)
    .catch( err => {
        console.log(err)
    })
}

function handleUpdate(update){
    return fetch('api/testimonial/update', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(update)
    })
    .then( res => {
        if(res.ok) return res.json()
    }).then( data => data)
    .catch(err => {
        console.log(err)
    })
}