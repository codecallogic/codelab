import React, { Component } from 'react';
import { Link } from 'react-scroll'
import ReactGA from 'react-ga';

class Header extends Component {

    preventDefault = (e) => {
        e.preventDefault()
        ReactGA.event({
            category: 'Landing Page',
            action: 'Get Started',
            label: 'Header'
        })
    }
    
    render () {
        return (
            <div>
            <div className="header">
                <div className="header__logo-box">
                    <img src="https://i.imgur.com/OZx2M1O.png" alt="Logo" className="header__logo"/>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Hi, I'm Fabricio</span>
                        <span className="heading-primary--sub">I'm a full stack developer, and I made this website</span>
                    </h1>
                    <Link to="section-about" activeClass="active" spy={true} smooth={true} offset={100} duraton={500}  href="/#" className="btn btn--white btn--animated" onClick={this.preventDefault}>Lets get started</Link>
                </div>
            </div>
            
            </div>
        )
    }
}
export default Header