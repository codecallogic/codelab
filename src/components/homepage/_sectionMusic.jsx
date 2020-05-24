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