import React, { Component } from 'react';
import aws from '../../utils/aws'

class TestimonialForm extends Component {

    constructor() {
        super()
        this.state = {
           name: '',
           company: '',
           title: '',
           heading: '',
           content: '',
           file: '',
           songUploadText: 'Upload Image', 
           step: 0, 
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
            const add = await aws.addTestimonial(this.state)
            console.log(add)
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

    
    
    render () {
        return (
            <div className="section-testimonial">
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="u-center-text section-testimonial-left">
                            <h2 className="heading-secondary-styled">
                                Please Help Me Show Others They Can Believe In My Work
                            </h2>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="u-center-text section-testimonial-right">
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
                                    <input type="text" id="title" name="title" placeholder="Position/Web Address/Other" autoComplete="off" onChange={this.handleChange} value={this.state.title} required/>
                                    <label htmlFor="title">Position/Web Address/Other</label>
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
                                    <textarea type="text" name="content" placeholder="Testimonial" value={this.state.content} onChange={this.handleChange} autoComplete="off" required/>
                                    <label htmlFor="name">Testimonial</label>                                   
                                </div>
                                <div className="form-group">
                                    <input type="file" id="song-upload" name="file" onChange={this.handleFile} autoComplete="off" required/>
                                    <label htmlFor="song-upload" className="form-group-file"><i className="fas fa-upload"></i> {this.state.songUploadText.split('\\').slice(-1)[0].substring(0,15)}</label>
                                    <small>Pleasa upload an image</small>
                                </div>
                                <button className="btn btn--previous btn--animated" onClick={this.stepBack}>Go Back</button>
                                <button className="btn btn--primary btn--animated">Submit</button>
                            </div>
                            }
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TestimonialForm