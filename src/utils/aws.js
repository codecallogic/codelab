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
    console.log(content)
    const formData  = new FormData();

    for(const name in content) {
        formData.append(name, content[name]);
    }
    console.log(formData)
    return fetch('/api/testimonial/add', {
        method: 'POST',
        body: formData
    })
    .then( res => {
        if (res.ok) return res.json()
    })
    .then( data => data )
    .catch(err => {
        console.log(err)
    })
}
