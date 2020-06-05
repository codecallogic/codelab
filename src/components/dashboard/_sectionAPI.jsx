import React, { Component } from 'react';
import spotify from '../../utils/spotify'
import queryString from 'query-string'

class SectionAPI extends Component {

    constructor() {
        super()
        this.state = {
           recentlyPlayed: [],
           apiCall: '',
        }
    }

    recentlyPlayed = async () => {
        let query = queryString.parse(window.location.search)
        let recentlyPlayed = Object.keys(query).length !== 0 ? await spotify.recentlyPlayed(query.access_token) : console.log('Empy Query')
        console.log(recentlyPlayed)
        const tracks = recentlyPlayed.reduce((unique, o) => {
            if(!unique.some(obj => obj.track.id === o.track.id)) {
              unique.push(o);
            }
            return unique
        },[]);
        console.log(tracks)
        this.setState({recentlyPlayed: tracks})
    }

    saveData = async () => {
        try {
            const data = await spotify.saveRP(this.state.recentlyPlayed)
            this.props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    
    render () {
        // const displayTracks = tracks.map( t =>
        //     <li key={t.track.id}>{t.track.name}, {t.track.external_urls.spotify}</li>
        // )
 
        return (
            <div>
                <div className="section-api">
                    <h1 className="heading-section-title">API'S</h1>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={() => window.location="http://localhost:3001/api/music/login"}>Spotify Token</button>
                    </div>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={this.recentlyPlayed}>Recently Played</button>
                    </div>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={this.saveData}>Save</button>
                    </div>
                        
                </div>
            </div>
        )
    }
}
export default SectionAPI