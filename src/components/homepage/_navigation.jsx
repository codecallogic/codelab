import React, { Component } from 'react';

class Navigation extends Component {
    render () {
        return (
            <div className="navigation">
                <input type="checkbox" id="navi-toggle" className="navigation-checkbox"/>
                <label htmlFor="navi-toggle" className="navigation-button">
                    <span className="navigation-icon"></span>
                </label>
                <div className="navigation-background"></div>
                <nav className="navigation-nav">
                    <ul className="navigation-list">
                        <li className="navigation-item"><a href="" className="navigation-link">About</a></li>
                        <li className="navigation-item"><a href="" className="navigation-link">Music</a></li>
                        <li className="navigation-item"><a href="" className="navigation-link">Services</a></li>
                        <li className="navigation-item"><a href="" className="navigation-link">Projects</a></li>
                        <li className="navigation-item"><a href="" className="navigation-link">Resume</a></li>
                        <li className="navigation-item"><a href="" className="navigation-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navigation