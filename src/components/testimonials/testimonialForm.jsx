import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aws from '../../utils/aws'

class TestimonialForm extends Component {

    constructor() {
        super()
        this.state = {
           name: '',
           company: '',
           website: '',
           title: '',
           heading: '',
           content: '',
           file: '',
           songUploadText: 'Portrait Image', 
           step: 0,
           message: ' Your testimonail was uploaded. Thank You!',
           percentage: 0,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if(this.state.step === 0){this.setState({ step: 1})}
        if(this.state.step === 1){
                this.setState({ step: 2})
                const progressBar = document.getElementsByClassName('section-testimonial-progress-bar')
                const bar = setInterval(() => { 
                    const computedStyle = window.getComputedStyle(progressBar[0])
                    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
                    if(width < 75){progressBar[0].style.setProperty('--width', width + .1)}
                }, 5)
                const add = await aws.addTestimonial(this.state)
                // console.log(add)
                if(add.errmsg){this.resetState()}
                if(add.image){
                    clearInterval(bar);
                    progressBar[0].style.setProperty('--width', 100)
                    setTimeout( () => {this.setState({step: 3})}, 600)
                }   
        }
    }

    stepBack = (e) => {
        e.preventDefault()
        this.setState( prevState => { return {step: prevState.step - 1 } })
    }

    handleFile = (e) => {
        this.setState({
            songUploadText: e.target.value,
            file: e.target.files[0]
        })
    }   
    
    resetState = () => {
        this.setState({
            name: '',
            company: '',
            title: '',
            heading: '',
            content: '',
            file: '',
            step: 0, 
        })
    }
    
    render () {

        return (
            <div className="section-testimonial">
                {this.state.step !== 3 && 
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="u-center-text section-testimonial-form-left">
                            <h2 className="heading-secondary-styled">
                                Please Help My Work Reach Others With Your Help
                            </h2>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="u-center-text section-testimonial-form-right">
                        <form className="form" onSubmit={this.handleSubmit}>
                            {this.state.step === 0 && 
                            <div>
                                <div className="form-group form-group-testimonial">
                                    <input type="text" id="name" name="name" placeholder="Full Name" autoComplete="off" onChange={this.handleChange} value={this.state.name} required/>
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                <div className="form-group form-group-testimonial">
                                    <input type="text" id="company" name="company" placeholder="Company (optional)" autoComplete="off" onChange={this.handleChange} value={this.state.company}/>
                                    <label htmlFor="company">Company</label>
                                </div>
                                <div className="form-group form-group-testimonial">
                                    <input type="text" id="title" name="title" placeholder="Position/Title/Other" autoComplete="off" onChange={this.handleChange} value={this.state.title} required/>
                                    <label htmlFor="title">Position/Title/Other</label>
                                </div>
                                <div className="form-group form-group-testimonial">
                                    <input type="url" id="website" name="website" placeholder="Website (optional)" autoComplete="off" onChange={this.handleChange} value={this.state.website}/>
                                    <label htmlFor="website">Website URL</label>
                                </div>  
                                <button className="btn btn--primary btn--animated">Continue</button>
                            </div>
                            }
                            {this.state.step === 1 && 
                            <div>
                                <div className="form-group">
                                    <div className="form-group form-group-testimonial">
                                        <input type="text" id="heading" name="heading" placeholder="Heading" autoComplete="off" onChange={this.handleChange} value={this.state.heading} required/>
                                        <label htmlFor="heading">Heading</label>
                                    </div>    
                                    <textarea type="text" name="content" placeholder="Testimonial" value={this.state.content} maxlength="250" onChange={this.handleChange} autoComplete="off" required/>
                                    <label htmlFor="content">Testimonial</label>                                   
                                </div>
                                <div className="form-group">
                                    <input type="file" id="file-upload" name="file" onChange={this.handleFile} autoComplete="off" required/>
                                    <label htmlFor="file-upload" className="form-group-file"><i className="fas fa-upload"></i> {this.state.songUploadText.split('\\').slice(-1)[0].substring(0,15)}</label>
                                    <small>Pleasa upload a portrait image</small>
                                </div>
                                <button className="btn btn--previous btn--animated" onClick={this.stepBack}>Go Back</button>
                                <button className="btn btn--primary btn--animated">Submit</button>
                            </div>
                            }
                            {this.state.step === 2 &&
                                <div className="section-testimonial-progress">
                                    <div className="section-testimonial-progress-bar" data-label="loading..." style={{"--width": 5}}></div>
                                    {/* <button className="btn btn--primary btn--animated" onClick={this.handleSubmit}>Submit</button> */}
                                </div>
                                
                            }
                            {this.state.step === 3 && 
                                <div className="u-center-text u-padding-big-vert section-testimonial-form-message">

                                    <span className="form-message form-message-animated"><i className="fas fa-paper-plane"></i> {this.state.message}</span>

                                    <Link to="/" className="btn btn--white btn--animated u-center-text" onClick={this.reset}>Home</Link>

                                </div>
                            }
                        </form>
                        </div>
                    </div>
                </div>
                }
                {this.state.step === 3 &&
                <div className="row">
                    <div className="col-1-of-1">
                    <div className="u-center-text u-padding-big-vert section-testimonial-form-message">

                    <span className="form-message form-message-animated"><i className="fas fa-paper-plane"></i> {this.state.message}</span>

                    <Link to="/" className="btn btn--white btn--animated u-center-text" onClick={this.reset}>Home</Link>

                    </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}
export default TestimonialForm