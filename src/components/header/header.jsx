import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render () {
        return (
            <div>
            <div className="header">
                <div className="header__logo-box">
                    <img src="https://i.imgur.com/TIDi3Mb.png" alt="Logo" className="header__logo"/>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Hi, I'm a Developer</span>
                        <span className="heading-primary--sub">I make modern websites</span>
                    </h1>
                    <Link to="/" className="btn btn--white btn--animated">Lets get started on a project together</Link>
                </div>
            </div>
            
            </div>
        )
    }
}
export default Header