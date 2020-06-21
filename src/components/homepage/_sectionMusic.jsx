import React, { Component, Link } from 'react';
import { Route, Switch} from 'react-router-dom'
import spotify from '../../utils/spotify';
import aws from '../../utils/aws';
import queryString from 'query-string'

class Music extends Component {
    constructor() {
        super()
        this.state = {
            search: null,
            recentlyPlayed: null,
            searchedTracks: null,
            accessToken: false,
            productions: null,
            current: null,
            pause: false,
            recommendedTracks: null,
            audio: null,
        }
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    spotifyLogin = () => {
        const locahostSearch = 'http://localhost:3001/api/search/login'
        const herokuSearch = 'https://codecallogic.herokuapp.com/api/search/login'
        const domainSearch = 'https://www.codecallogic.com/api/search/login'
        window.location=domainSearch
    }
    
    searchMusic = async (e) => {
        e.preventDefault();
        let query = queryString.parse(window.location.search);
        let search = this.state.search
        let playlist = await spotify.getPlaylist(query.access_token)

        if(playlist !== undefined){
        let searchMusic = Object.keys(query).length !== 0 ? await spotify.searchMusic(query.access_token, search) : console.log('Error');
        this.setState({
            searchedTracks: searchMusic
        })
        }

        let recommended = [];
        if(playlist !== undefined){
            for(let i = 0; i < playlist.length; i++){
                if(playlist[i].name === 'Recommended'){
                    recommended.push(playlist[i])
                }
            }
            // console.log(recommended[0].id)
            let tracks = await spotify.recommendedTracks(query.access_token, recommended[0].id)
            let trackID = tracks.map( t => 
                t.track.id
            )
            console.log(tracks)
            // console.log(trackID)
            this.setState({
                recommendedTracks: trackID
            })
            // console.log(this.state.recommendedTracks)
        }
    }

    addToPlaylist = async (uri) => {
        let query = queryString.parse(window.location.search);
        let playlist = await spotify.getPlaylist(query.access_token)
        let recommended = [];
        console.log(playlist)
        for(let i = 0; i < playlist.length; i++){
            if(playlist[i].name === 'Recommended'){
                recommended.push(playlist[i])
            }
        }
        let response = recommended[0] !== undefined ? 
            await spotify.addToPlaylist(query.access_token, recommended[0].id, uri)
            : 
            console.log('error')
        let tracks = await spotify.recommendedTracks(query.access_token, recommended[0].id)
        let trackID = tracks.map( t => 
            t.track.id
        )
        this.setState({
            recommendedTracks: trackID
        })   
    }

    playSong = (url, id) => {
        if(this.state.pause === false){
              this.setState({
                  current: id,
                  pause: true, 
              })
          
              this.audio = new Audio(url)
              this.audio.play()
        }else{
            let song = new Audio(url)
            song.pause()
        }
        const self = this
        this.audio.addEventListener('ended', function () {
            self.setState({
                pause: false, 
            })
          }, false);
    }

    stopSong = () => {
        this.audio.pause()
        this.setState({
            pause: false, 
        })
    }

    componentWillMount = async () => {
        const tracks = await spotify.getRecentlyPlayed()
        this.setState({ recentlyPlayed: tracks })
        let query = queryString.parse(window.location.search);
        if(Object.keys(query).length !== 0){
            const element = document.getElementById('section-search')
            element.scrollIntoView({behavior: 'smooth'});
            this.setState({
                accessToken: true
            })
        }
    }

    componentWillReceiveProps(){
        let query = queryString.parse(window.location.search);
        if(query.access_token){
            if(query.access_token.length !== 0){
                this.setState({
                    accessToken: false
                })
            }
        }
    }

    componentDidMount = async () =>{
        const songs = await aws.getSongs()
        this.setState({
            productions: songs 
        })
    }
    
    render () {
        
        return (
            <section id="section-music" className="section-music">                
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
                        <div className="col-1-of-3" id="section-search">
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
                                                <span><small>{t.artists[0].name}</small>{t.name.substring(0,25)}</span>
                                                {this.state.recommendedTracks !== null && this.state.recommendedTracks.indexOf(t.id) === -1 && 
                                                    <div onClick={() => this.addToPlaylist(t.uri)}>
                                                    <i className="fas fa-plus"></i></div>
                                                }
                                            
                                                {this.state.recommendedTracks !== null && this.state.recommendedTracks.indexOf(t.id) !== -1 && 
                                                    <div>
                                                    <i className="fas fa-check"></i>
                                                    </div>
                                                }
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
                                    Recent Productions
                            </h3>
                            <div className="section-music-track">
                                <ul>
                                    {this.state.productions !== null && this.state.productions.length > 0 && this.state.productions.map( e => 
                                        <li key={e._id}>

                                        {this.state.pause === false && <a onClick={() => this.playSong(e.song.url, e._id)}><i className="fas fa-play-circle section-music-play"></i></a>}

                                        {this.state.pause === true && this.state.current === e._id && <a onClick={() => this.stopSong(e.song.url, e._id)}><i className="far fa-pause-circle section-music-pause"></i></a>}   

                                        <img src={e.url} alt=""/>
                                        <span><small>{e.content}</small>{e.name.substring(0,25)}</span>
                                    </li>
                                    )}
                                    {this.state.productions !== null && this.state.productions.length === 0 && <div className="u-center-text">Sorry no songs have been added</div>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Music