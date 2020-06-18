import React, { Component } from 'react';

class Navigation extends Component {

    closeNav = () => {
        const checkbox = document.getElementById('navi-toggle')

        checkbox.checked = false
    }
    
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
                        <li className="navigation-item"><a href="" className="navigation-link" onClick={this.closeNav}>About</a></li>
                        <li className="navigation-item"><a href="" className="navigation-link" onClick={this.closeNav}>Music</a></li>
                        <li className="navigation-item"><a href="" className="navigation-link" onClick={this.closeNav}>Services</a></li>
                        <li className="navigation-item"><a href="#section-projects" className="navigation-link" onClick={this.closeNav}>Projects</a></li>
                        <li className="navigation-item" onClick={this.closeNav}><a href="#section-resume" className="navigation-link" onClick={this.closeNav}>Resume</a></li>
                        <li className="navigation-item"><a href="#section-book" className="navigation-link" onClick={this.closeNav}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navigation