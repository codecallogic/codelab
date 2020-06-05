import React, { Component, Link } from 'react';
import spotify from '../../utils/spotify';

class Music extends Component {
    constructor() {
        super()
        this.state = {
           recentlyPlayed: null,
        }
      }

    componentWillMount = async () => {
        const tracks = await spotify.getRecentlyPlayed()
        this.setState({ recentlyPlayed: tracks })
        console.log(this.state.recentlyPlayed)
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
                                        { 
                                        this.state.recentlyPlayed !== null && 
                                        this.state.recentlyPlayed[0].recentlyPlayed.map( t => 
                                        <li key={t.track.id}>
                                            <i className="fas fa-play-circle section-music-play"></i>
                                            <img src={t.track.album.images[0].url} alt=""/>
                                            <span><small>{t.track.artists[0].name}</small>{t.track.name}</span></li>
                                        )
                                        }
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