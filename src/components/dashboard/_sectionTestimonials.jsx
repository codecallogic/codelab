import React, { Component } from 'react';
import ClientService from '../../utils/clientService'
import clientService from '../../utils/clientService';

class Testimonials extends Component {

    constructor() {
        super()
        this.state = {
            testimonials: [],
            unapproved: false,
            approved: false,
        }
    }

    getTestimonials = async (e) => {
        const status = e.target.name
        const allTestimonials = await clientService.getTestimonials()
        if(status === 'unapproved'){this.setState({unapproved: true})}
        if(status === 'approved'){this.setState({approved: true})}
        this.setState({
            testimonials: allTestimonials
        })
        console.log(this.state.testimonials)
    }
    
    render () {
        return (
            <div className="section-admin-testimonials">
                <div className="section-admin-testimonials-menu">
                    <h1 className="heading-section-title u-width-3">Testimonials</h1>
                    <div className="u-width-3">
                        <button className="btn-submit" name="unapproved" onClick={this.getTestimonials}>Unapproved Testimonials</button>
                    </div>
                    <div className="u-width-3">
                        <button className="btn-submit" name="approved" onClick={this.getTestimonials}>Approved Testimonials</button>
                    </div>
                </div>
                <div className="row">
                    {this.state.testimonials.map( t => 
                    <div key={t._id} className="col-1-of-3">
                        <h1 className="header-tertiary u-center-text u-margin-bottom-small">{t.heading}</h1>
                        <div className="testimonial-box">
                            <svg width="0" height="0">
                            <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                <stop stopColor="#c87a73" offset="0" />
                                <stop stopColor="#c87a73" offset="0.05" />
                                <stop stopColor="#AC0032" offset="0.45" />
                                <stop stopColor="#AC0032" offset="0.6" />
                                <stop stopColor="#34000f" offset="0.8" />
                            </radialGradient>
                            </svg>
                            <i className="fas fa-quote-left testimonial-box-icon"></i>
                            <p className="testimonial-box-text">
                                {t.content}
                            </p>
                            
                        </div>
                        <div className="testimonial-shape-box">
                            <figure className="testimonial-shape">
                                    <img src={t.image.url} alt={t.name} className="testimonial-image" style={{transform: 'translateY(-1rem) scale(1)'}}/>
                            </figure>
                        </div>
                        <h1 className="header-tertiary u-center-text ">{t.name}</h1>
                        <h3 className="header-sub-title u-center-text">{t.title}{ t.company ? ' at ': null} {t.company}</h3>
                        <a href="" className="u-center-text block">Link</a>
                        <div className="testimonial button-box">
                            <button className="btn btn--white">Approve</button>
                            <button className="btn btn--light">Unapprove</button>
                        </div>  
                    </div>                       
                    )}                                                           
                </div>
            </div>
        )
    }
}
export default Testimonials