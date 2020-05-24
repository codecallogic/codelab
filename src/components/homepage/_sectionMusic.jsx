import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spotify from '../../utils/spotify'
import queryString from 'query-string'

class Music extends Component {

    constructor() {
        super()
        this.state = {
           apiResponse: [],
        }
    }

    search = () => {
        Spotify.search()
    }

    componentDidMount() {
        let query = queryString.parse(window.location.search)
        if(Object.keys(query).length !== 0){
            fetch('https://api.spotify.com/v1/me/player?market=ES&additional_types=episode', {
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
            <section className="section-music">
                <div className="row">
                    <div className="col-1-of-8">
                        <ul className="heading-side">
                            <li>M</li>
                            <li>U</li>
                            <li>S</li>
                            <li>I</li>
                            <li>C</li>
                        </ul>
                    </div>
                    <div className="col-7-of-8">Col 7 of 8</div>
                </div>
            </section>
        )
    }
}
export default Music