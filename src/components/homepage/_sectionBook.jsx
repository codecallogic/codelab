import React, { Component } from 'react';
import emailService from '../../utils/emailService'

class Book extends Component {

    constructor() {
        super()
        this.state = {
           name: '',
           email: '',
           content: '',
           step: 1,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        if(this.state.step === 0){this.setState({ step: 1 })}
        if(this.state.step === 1){
            const email = await emailService.client(this.state)
            console.log(email)
        }
    }

    stepBack = (e) => {
        e.preventDefault()
        this.setState( prevState => { return {step: prevState.step - 1 } })
    }

    render () {
        return (
            <section className="section-book" id="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book-form-box">
                            <form className="book-form" onSubmit={this.handleSubmit}>
                                <div className="u-center-text">
                                <h2 className="heading-secondary u-margin-bottom-medium">
                                    Start Booking Now
                                </h2>
                                </div>
                                {this.state.step === 0 &&
                                <div>
                                <div className="book-form-group">
                                    <input type="text" id="name" name="name" placeholder="Full Name" className="book-form-input" autoComplete="off" onChange={this.handleChange} value={this.state.name} required/>
                                    <label htmlFor="name" className="book-form-label">Full Name</label>
                                </div>
                                <div className="book-form-group">
                                    <input type="email" id="email" name="email" placeholder="Email" className="book-form-input" autoComplete="off" onChange={this.handleChange} value={this.state.email} required/>
                                    <label htmlFor="email" className="book-form-label">Email</label>
                                </div>
                                <div className="book-form-group">
                                    <div className="book-form-radio-group">
                                        <input type="radio" id="small" className="book-form-radio-input" name="size"/>
                                        <label htmlFor="small" className="book-form-radio-label">
                                            <span className="book-form-radio-button"></span>
                                            Small Project
                                        </label>
                                    </div>
                                    <div className="book-form-radio-group">
                                        <input type="radio" id="large" className="book-form-radio-input" name="size"/>
                                        <label htmlFor="large" className="book-form-radio-label">
                                            <span className="book-form-radio-button"></span>
                                            Big Project
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn--primary btn--animated">Next Step</button>
                                </div>
                                }
                                {this.state.step === 1 && 
                                <div>
                                <div className="book-form-group">
                                    <textarea id="content" name="content" placeholder="Write your message here..." className="book-form-content" autoComplete="off" onChange={this.handleChange} value={this.state.content} required/>
                                    <label htmlFor="content" className="book-form-label">Message</label>
                                </div>
                                <button className="btn btn--previous btn--animated" onClick={this.stepBack}>Go Back</button>
                                <button className="btn btn--primary btn--animated">Send</button>
                                {/* <span className="book-form-index">{this.state.step + 1} / 2</span> */}
                                </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Book