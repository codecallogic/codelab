import React, { Component} from 'react';
import { Link } from 'react-scroll'
import clientService from '../../utils/clientService';

class Navigation extends Component {

    constructor() {
        super()
        this.state = {
           testimonials: false,
        }
      }

    closeNav = (e) => {
        e.preventDefault()
        const checkbox = document.getElementById('navi-toggle')

        checkbox.checked = false

    }

    componentDidMount = async () => {
        const allTestimonials = await clientService.getTestimonials()
        if(allTestimonials === undefined){
            this.setState({
                none: true,
            })
        }
        const approved = []

        if(allTestimonials !== undefined){
            allTestimonials.map( t => {
                if(t.status){
                    approved.push(t)
                }
            })    
        }
        if(approved.length !== 0){
            this.setState({
                testimonials: true,
            })
        }
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
                        <li className="navigation-item"><Link to="section-about" activeClass="active" spy={true} smooth={true} offset={50} duraton={500} href="/#" className="navigation-link" onClick={this.closeNav}>About</Link></li>

                        <li className="navigation-item"><Link to="section-music" activeClass="active" spy={true} smooth={true} offset={0} duraton={500} href="/#" className="navigation-link" onClick={this.closeNav}>Music</Link></li>

                        <li className="navigation-item"><Link to="section-features" activeClass="active" spy={true} smooth={true} offset={50} duraton={500} href="/#" className="navigation-link" onClick={this.closeNav}>Features</Link></li>

                        <li className="navigation-item"><Link to="section-projects" activeClass="active" spy={true} smooth={true} offset={50} duraton={500}  href="/#" className="navigation-link" onClick={this.closeNav}>Projects</Link></li>

                        {this.state.testimonials !== false && 
                        <li className="navigation-item"><Link to="section-testimonials" activeClass="active" spy={true} smooth={true} offset={50} duraton={500}  href="/#" className="navigation-link" onClick={this.closeNav}>Testimonials</Link></li>
                        }   

                        <li className="navigation-item"><Link to="section-experience" activeClass="active" spy={true} smooth={true} offset={50} duraton={500} href="/#" className="navigation-link" onClick={this.closeNav}>Resume</Link></li>
                        
                        <li className="navigation-item"><Link to="section-book" activeClass="active" spy={true} smooth={true} offset={50} duraton={500} href="/#" className="navigation-link" onClick={this.closeNav}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navigation