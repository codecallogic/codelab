import React, { Component } from 'react';
import spotify from '../../utils/spotify'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

class SectionAPI extends Component {

    constructor() {
        super()
        this.state = {
           recentlyPlayed: [],
           apiCall: '',
        }
    }

    spotifyLogin = () => {
        const localLogin = 'http://localhost:3001/api/music/login'
        const herokuLogin = 'https://codecallogic.herokuapp.com/api/music/login'
        const domainLogin = 'https://www.fabricioguardia.com/api/music/login'
        window.location=domainLogin
    }

    recentlyPlayed = async () => {
        let query = queryString.parse(window.location.search)
        let recentlyPlayed = Object.keys(query).length !== 0 ? await spotify.recentlyPlayed(query.access_token) : console.log('Empy Query')
        const tracks = recentlyPlayed.reduce((unique, o) => {
            if(!unique.some(obj => obj.track.id === o.track.id)) {
              unique.push(o);
            }
            return unique
        },[]);
        // console.log(tracks)
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
        return (
           
            <div>
                <Link to='/' className=''>Home </Link>
                {this.props.user ? 
                    <Link to='' className='' onClick={this.props.handleLogOut}>Log Out</Link>
                    :
                    <Link to='/login' className=''>Log In</Link>
                }
                <div className="section-api">
                    <h1 className="heading-section-title">API'S</h1>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={this.spotifyLogin}>Spotify Token</button>
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