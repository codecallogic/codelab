export default {
    search,
}

function search(){
    return fetch ('/login')
    .then(res => res.json())
    .then(res => console.log(res))
    
    // axios.get("/login").then(response => {
    //     console.log(response)
    //     this.setState({apiResponse: response.data})
    // })
}