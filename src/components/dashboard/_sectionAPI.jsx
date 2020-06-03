import React, { Component } from 'react';
import spotify from '../../utils/spotify'
import queryString from 'query-string'

class SectionAPI extends Component {

    constructor() {
        super()
        this.state = {
           apiResponse: [],
        }
    }

    componentDidMount = () => {
        let query = queryString.parse(window.location.search)
        if(Object.keys(query).length !== 0){
        return fetch('https://api.spotify.com/v1/me/player/recently-played?type=track&limit=10&after=1590216513000', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + query.access_token,
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
    }
    
    render () {
        return (
            <div>
                <div className="section-api">
                    <h1 className="heading-section-title">API'S</h1>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={() => window.location="http://localhost:3001/api/music/login"}>Recently Played</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SectionAPI