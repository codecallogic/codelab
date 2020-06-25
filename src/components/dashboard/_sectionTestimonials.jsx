import React, { Component } from 'react';
import ClientService from '../../utils/clientService'
import clientService from '../../utils/clientService';

class Testimonials extends Component {

    constructor() {
        super()
        this.state = {
            unapproved: false,
            approved: false,
        }
    }

    getTestimonials = async (e) => {
        const testimonials = await clientService.getTestimonials()
        console.log(testimonials)
    }
    
    render () {
        return (
            <div className="section-admin-testimonials">
                <div className="section-admin-testimonials-menu">
                    <h1 className="heading-section-title u-width-3">Testimonials</h1>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={this.getTestimonials}>Unapproved Testimonials</button>
                    </div>
                    <div className="u-width-3">
                        <button className="btn-submit" onClick={this.getTestimonials}>Approved Testimonials</button>
                    </div>
                </div>
                <div className="row">                    
                    <div className="col-1-of-3">
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
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sequi iste fugiat perspiciatis quae rem dignissimos unde. Quam fugit eveniet ullam autem nemo ratione repudiandae, voluptatibus quisquam at, totam atque.
                            </p>
                            
                        </div>
                        <div className="testimonial-shape-box">
                            <figure className="testimonial-shape">
                                    <img src="https://i.imgur.com/O4zgxRB.jpg" alt="General Assembly" className="testimonial-image"/>
                            </figure>
                        </div>
                        <h1 className="header-tertiary u-center-text u-margin-top-small">Name</h1>
                        <h3 className="header-sub-title u-center-text">Title and Company</h3>
                        <a href="" className="u-center-text block">Link</a>
                    </div>                        
                </div>
            </div>
        )
    }
}
export default Testimonials