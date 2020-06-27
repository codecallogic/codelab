import React, { Component } from 'react';
import clientService from '../../utils/clientService';

class Testimonials extends Component {

    constructor() {
        super()
        this.state = {
            testimonialsApproved: [],
            testimonialsUnapproved: [],
            unapproved: false,
            approved: false,
            status: null,
            selected: '#AC0032',
            Yaxis: '',
            scale: '',
            id: null,
            none: false,
        }
    }

    getTestimonials = async (e) => {
        const status = e.target.name
        const allTestimonials = await clientService.getTestimonials()
        this.setState(prevState => ({
            [status]: !prevState[status], 
        }))
        console.log(allTestimonials)
        const approved = []
        const unapproved = []
        if(allTestimonials !== undefined){
            allTestimonials.map( t => {
                if(t.status){
                    approved.push(t)
                }
                if(t.status === false){
                    unapproved.push(t)
                }
            })
            this.setState({
                testimonialsApproved: approved,
                testimonialsUnapproved: unapproved,
                none: false,
            })
        }
        if(allTestimonials === undefined){
            this.setState({
                none: true,
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleStatus = (e) => {
        e.preventDefault()
        const name = e.target.name
        if(name === 'yes'){this.setState({ status: true, id: e.target.value })}
        if(name === 'no'){this.setState({ status: false, id: e.target.value })}
        if(name === 'delete'){this.setState({ status: 'delete', id: e.target.value })}
        if(name === 'reset'){this.setState({ status: null, id: e.target.value })}
    }

    handleUpdate = async (e) => {
        e.preventDefault()
        const obj = {
            status: this.state.status,
            Yaxis: this.state.Yaxis,
            scale: this.state.scale,
            id: this.state.id
        }
        const update = await clientService.handleUpdate(obj)
        if(update){
            this.setState({
                testimonialsApproved: [],
                testimonialsUnapproved: [],
                unapproved: false,
                approved: false,
            })
        }
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
                    {this.state.none === true && 
                        <div>
                            <h1 className="header-tertiary u-center-text u-margin-bottom-small">No Testimonials</h1>
                        </div>  
                    }
                    {this.state.unapproved === true && this.state.testimonialsUnapproved[0] !== undefined && this.state.testimonialsUnapproved.map( t => 
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
                                <img src={t.image.url} alt={t.name} className="testimonial-image" style={{transform: `translateY(${this.state.Yaxis}rem) scale(${this.state.scale})`}}/>
                            </figure>
                        </div>
                        <h1 className="header-tertiary u-center-text ">{t.name}</h1>
                        <h3 className="header-sub-title u-center-text">{t.title}{ t.company ? ' at ': null} {t.company}</h3>
                        {t.website ? <a href={t.website} className="u-center-text block testimonial-link">Website</a> : null}
                        <div className="testimonial button-box u-center-text">
                            {this.state.status === null && 
                            <div>
                                <button className="btn btn--white" name="yes" onClick={this.handleStatus} value={t._id}>Yes</button>
                                <button className="btn btn--white" name="no" onClick={this.handleStatus} value={t._id}>No</button>
                                <button className="btn btn--white" name="delete" onClick={this.handleStatus} value={t._id}>Delete</button>
                            </div>
                            }
                            {this.state.status === true && 
                                <button className="btn btn--light" name="reset" onClick={this.handleStatus} style={{backgroundColor: this.state.selected, color: 'white'}}>Yes</button>
                            }
                            {this.state.status === false && 
                                <button className="btn btn--light" name="reset" onClick={this.handleStatus} style={{backgroundColor: this.state.selected, color: 'white'}}>No</button>
                            }
                            {this.state.status === 'delete' && 
                                <button className="btn btn--light" name="reset" onClick={this.handleStatus} style={{backgroundColor: this.state.selected, color: 'white'}}>Delete</button>
                            }
                        </div>
                        <form className="form" onSubmit={this.handleUpdate}>
                            <div className="form-group">
                                <input type="text" type="text" name="Yaxis" placeholder={t.Yaxis} onChange={this.handleChange} value={this.state.Yaxis} autoComplete="off"/>
                                <label htmlFor="Yaxis">Y Axis</label>
                            </div>
                            <div className="form-group">
                                <input type="text" type="text" name="scale" placeholder={t.scale} onChange={this.handleChange} value={this.state.scale} autoComplete="off"/>
                                <label htmlFor="scale">Scale</label>
                            </div>
                            <button className="btn btn--white">Update</button>
                        </form>
                    </div>                       
                    )}
                    {this.state.approved === true && this.state.testimonialsApproved[0] !== undefined && this.state.testimonialsApproved.map( t => 
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
                                <img src={t.image.url} alt={t.name} className="testimonial-image" style={{transform: `translateY(${this.state.Yaxis}rem) scale(${this.state.scale})`}}/>
                            </figure>
                        </div>
                        <h1 className="header-tertiary u-center-text ">{t.name}</h1>
                        <h3 className="header-sub-title u-center-text">{t.title}{ t.company ? ' at ': null} {t.company}</h3>
                        <a href="" className="u-center-text block">Link</a>
                        <div className="testimonial button-box u-center-text">
                            {this.state.status === null && 
                            <div>
                                <button className="btn btn--white" name="yes" onClick={this.handleStatus} value={t._id}>Yes</button>
                                <button className="btn btn--white" name="no" onClick={this.handleStatus} value={t._id}>No</button>
                                <button className="btn btn--white" name="delete" onClick={this.handleStatus} value={t._id}>Delete</button>
                            </div>
                            }
                            {this.state.status === true && 
                                <button className="btn btn--light" name="reset" onClick={this.handleStatus} style={{backgroundColor: this.state.selected, color: 'white'}}>Yes</button>
                            }
                            {this.state.status === false && 
                                <button className="btn btn--light" name="reset" onClick={this.handleStatus} style={{backgroundColor: this.state.selected, color: 'white'}}>No</button>
                            }
                            {this.state.status === 'delete' && 
                                <button className="btn btn--light" name="reset" onClick={this.handleStatus} style={{backgroundColor: this.state.selected, color: 'white'}}>Delete</button>
                            }
                        </div>
                        <form className="form" onSubmit={this.handleUpdate}>
                            <div className="form-group">
                                <input type="text" type="text" name="Yaxis" placeholder={t.Yaxis} value={this.state.Yaxis} onChange={this.handleChange} autoComplete="off"/>
                                <label htmlFor="Yaxis">Y Axis</label>
                            </div>
                            <div className="form-group">
                                <input type="text" type="text" name="scale" placeholder={t.scale} value={this.state.scale} onChange={this.handleChange} autoComplete="off"/>
                                <label htmlFor="scale">Scale</label>
                            </div>
                            <button className="btn btn--white">Update</button>
                        </form>
                    </div>                       
                    )}                                                             
                </div>
            </div>
        )
    }
}
export default Testimonials