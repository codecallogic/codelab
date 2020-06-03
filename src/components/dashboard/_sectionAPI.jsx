import React, { Component } from 'react';
import spotify from '../../utils/spotify'

class SectionAPI extends Component {

    constructor() {
        super()
        this.state = {
           apiResponse: [],
        }
    }

    spotifyLogin = () => {
        spotify.login()
    }
    
    render () {
        return (
            <div>
                <div className="section-api">
                    <h1 className="heading-section-title">API'S</h1>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={this.spotifyLogin}>Recently Played</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SectionAPI