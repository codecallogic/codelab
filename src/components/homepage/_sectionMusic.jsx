import React, { Component, Link } from 'react';
import spotify from '../../utils/spotify';
import queryString from 'query-string'

class Music extends Component {
    constructor() {
        super()
        this.state = {
            search: null,
            recentlyPlayed: null,
            searchedTracks: null,
            accessToken: false,
        }
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    spotifyLogin = () => {
        window.location="http://localhost:3001/api/search/login";
    }

    searchMusic = async (e) => {
        e.preventDefault();
        let query = queryString.parse(window.location.search);
        let search = this.state.search
        let searchMusic = Object.keys(query).length !== 0 ? await spotify.searchMusic(query.access_token, search) : console.log('Error');
        this.setState({
            searchedTracks: searchMusic
        })
        console.log(searchMusic)
    }

    componentWillMount = async () => {
        const tracks = await spotify.getRecentlyPlayed()
        this.setState({ recentlyPlayed: tracks })
        let query = queryString.parse(window.location.search);
        if(Object.keys(query).length !== 0){
            const element = document.getElementById('music')
            element.scrollIntoView({behavior: 'smooth'});
            this.setState({
                accessToken: true
            })
        }
    }

    componentWillReceiveProps(nextProps){
        const accessTrue = this.state.accessToken
        const accessChange = false
        if(access !== accessChange){
            this.setState({
                accessToken: false
            })
        }
    }
    
    render () {
        return (
            <section id="music" className="section-music">
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
                                    Recently Played On Spotify
                                </h3>
                                <div className="section-music-track">
                                    <ul>
                                        { 
                                        this.state.recentlyPlayed !== null && 
                                        this.state.recentlyPlayed[0].recentlyPlayed.map( t => 
                                        <li key={t.track.id}>
                                            <a href={t.track.external_urls.spotify} target="_blank"><i className="fas fa-play-circle section-music-play"></i></a>
                                            <img src={t.track.album.images[0].url} alt=""/>
                                            <span><small>{t.track.artists[0].name}</small>{t.track.name}</span>
                                        </li>
                                        )
                                        }
                                    </ul>
                                </div>
                                <p className="section-music-updated u-center-text">Updated on {this.state.recentlyPlayed !== null && this.state.recentlyPlayed[0].createdAt.substring(0,10)}</p>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            {this.state.accessToken === false && 
                            <div className="section-search">
                                <h3 className="heading-tertiary u-center-text">
                                        Recommend A Track
                                </h3>
                                <div className="section-search-login">
                                    <button onClick={this.spotifyLogin}><i className="fab fa-spotify"></i></button>
                                    <small>Search Tracks</small>
                                </div>
                            </div>      
                            }

                            {this.state.accessToken === true && <div className="section-search">
                                <h3 className="heading-tertiary u-center-text">
                                        Recommend A Track
                                </h3>
                                <form onSubmit={this.searchMusic} className="form-search">
                                    <div className="form-search-group">
                                        <input type="text" name="search" placeholder="Track or Artists" value={this.state.username} onChange={this.handleChange} autoComplete="off"/>
                                        <button className="btn-search">Search</button>
                                    </div>
                                </form>
                                <div className="section-music-track">
                                    <ul>
                                        { this.state.searchedTracks !== null && this.state.searchedTracks.map( t => 
                                            <li key={t.id}>
                                                <a href={t.external_urls.spotify} target="_blank"><i className="fas fa-play-circle section-music-play"></i></a>
                                                <img src={t.album.images[0].url} alt=""/>
                                                <span><small>{t.artists[0].name}</small>{t.name}</span>
                                            </li>
                                        )
                                        }
                                    </ul>
                                </div>
                            </div>
                            }
                        </div>
                        <div className="col-1-of-3">
                            <h3 className="heading-tertiary u-center-text">
                                    Tracks Produced
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Music