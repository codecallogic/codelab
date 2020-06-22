import React, { Component } from 'react';

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
                        <span className="heading-primary--main">Hi, I'm a Full Stack Developer</span>
                        <span className="heading-primary--sub">I Like Making Slick and Fast Websites</span>
                    </h1>
                    <a href="#section-resume" className="btn btn--white btn--animated">Lets get started</a>
                </div>
            </div>
            
            </div>
        )
    }
}
export default Header