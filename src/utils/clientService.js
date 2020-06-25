export default {
    getTestimonials        
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