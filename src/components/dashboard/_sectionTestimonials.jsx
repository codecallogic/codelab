import React, { Component } from 'react';

class Testimonials extends Component {

    constructor() {
        super()
        this.state = {
            unapproved: false,
            approved: false,
        }
    }

    getTestimonials = () => {

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
                                <stop stop-color="#c87a73" offset="0" />
                                <stop stop-color="#c87a73" offset="0.05" />
                                <stop stop-color="#AC0032" offset="0.45" />
                                <stop stop-color="#AC0032" offset="0.6" />
                                <stop stop-color="#34000f" offset="0.8" />
                            </radialGradient>
                            </svg>
                            <i className="fas fa-quote-left testimonial-box-icon"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Applications</h3>
                            <p className="testimonial-box-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sequi iste fugiat perspiciatis quae rem dignissimos unde. Quam fugit eveniet ullam autem nemo ratione repudiandae, voluptatibus quisquam at, totam atque.
                            </p>
                            
                        </div>
                        <div className="testimonial-shape-box">
                            <figure className="testimonial-shape">
                                    <img src="https://i.imgur.com/O4zgxRB.jpg" alt="General Assembly" className="testimonial-image"/>
                            </figure>
                        </div>
                    </div>                        
                </div>
            </div>
        )
    }
}
export default Testimonials