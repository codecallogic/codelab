import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spotify from '../../utils/spotify'
import queryString from 'query-string'

class Music extends Component {

    constructor() {
        super()
        this.state = {
           apiResponse: "Hi",
        }
    }

    search = () => {
        Spotify.search()
    }

    componentDidMount() {
        let query = queryString.parse(window.location.search)
        console.log(query.access_token)
        fetch('https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C3twNvmDtFQtAd5gMKedhLD', {
            headers: {
                'Authorization': 'Bearer ' + query.access_token,
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    render () {
        return (
            <div>
                <button onClick={() => window.location="http://localhost:3001/login"}>Music</button>
                <p>{this.state.apiResponse}</p>
            </div>
        )
    }
}
export default Music