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
            fetch('https://api.spotify.com/v1/me/player/recently-played?type=track&limit=10&after=1590216513000', {
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
                    <div className="col-7-of-8">
                        <div className="col-1-of-3">
                            <div className="section-music-recently-played">
                                <h3 className="heading-tertiary u-center-text">
                                    Recently Played Music
                                </h3>
                                <div className="section-music-track">
                                    <ul>
                                        <li>
                                            <img src="https://i.imgur.com/JhAR0AW.jpg" alt=""/>
                                            <span>El Sol Avenue</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            Helloadfadsf
                        </div>
                        <div className="col-1-of-3">
                            Helloadfadsf
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Music