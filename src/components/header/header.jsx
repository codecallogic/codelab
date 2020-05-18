import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="logo-box">
                    <img src="https://i.imgur.com/TIDi3Mb.png" alt="Logo" className="logo"/>
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Fluid Websites</span>
                        <span className="heading-primary-sub">Fits This Page In Your Phone</span>
                    </h1>
                    <Link to="/" className="btn btn-white btn-animated">Lets get start on a project together</Link>
                </div>
            </div>
        )
    }
}
export default Header