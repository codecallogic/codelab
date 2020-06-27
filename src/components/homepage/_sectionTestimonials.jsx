import React, { Component } from 'react';
import clientService from '../../utils/clientService';

class Testimonials extends Component {

    constructor() {
        super()
        this.state = {
            testimonialsApproved: [],
            none: false,
        }
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
            // console.log(approved)
            this.setState({
                testimonialsApproved: approved,
                none: false,
            })
        }
        // console.log(this.state.testimonialsApproved)
    }
    
    render () {
        return (
            <div className="section-testimonials">
            <div className="section-testimonial-display">
                {this.state.testimonialsApproved.length !== 0 && <div className="u-center-text">
                    <h1 className="heading-secondary u-center-text">Testimonials</h1>
                </div>
                }
                <div className="row">
                {this.state.none === false && this.state.testimonialsApproved.map( t =>
                        <div key={t._id} className="col-1-of-3">
                            <h1 className="header-tertiary u-center-text u-margin-top-medium">{t.heading}</h1>
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
                                    <img src={t.image.url} alt={t.name} className="testimonial-image" style={{transform: `translateY(${t.Yaxis}rem) scale(${t.scale})`}}/>
                                </figure>
                            </div>
                            <h1 className="header-tertiary u-center-text ">{t.name}</h1>
                            <h3 className="header-sub-title u-center-text">{t.title}{ t.company ? ' at ': null} {t.company}</h3>
                            {t.website ? <a href={t.website} className="u-center-text block testimonial-link">Website</a> : null}
                        </div>         
                    )}
                </div>
            </div>
            </div>
        )
    }
}
export default Testimonials