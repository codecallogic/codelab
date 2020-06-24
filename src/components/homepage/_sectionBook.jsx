import React, { Component } from 'react';
import emailService from '../../utils/emailService'

class Book extends Component {

    constructor() {
        super()
        this.state = {
           name: '',
           email: '',
           content: '',
           step: 0,
           project: null,
           message: '',
           date: null,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        if(this.state.step === 0){
            this.setState({ 
                step: 1,
                date: today
            }
        )}
        if(this.state.step === 1){
            const email = await emailService.client(this.state)
            if(email.success){
                this.setState({
                    name: '',
                    email: '',
                    content: '',
                    step: 3,
                    project: null,
                    message: 'Message was sent!',
                })
            }
        }
    }

    stepBack = (e) => {
        e.preventDefault()
        this.setState( prevState => { return {step: prevState.step - 1 } })
    }

    reset = (e) => {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            content: '',
            project: null,
            step: 0,
            message: '',
        })
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
                                        <input type="radio" id="small" name="project" className="book-form-radio-input" value="small" onClick={this.handleChange}/>
                                        <label htmlFor="small" className="book-form-radio-label">
                                            <span className="book-form-radio-button"></span>
                                            Small Project
                                        </label>
                                    </div>
                                    <div className="book-form-radio-group">
                                        <input type="radio" id="large" value="large" name="project" className="book-form-radio-input" onChange={this.handleChange}/>
                                        <label htmlFor="large" className="book-form-radio-label">
                                            <span className="book-form-radio-button"></span>
                                            Big Project
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn--primary btn--animated">Next Step</button>
                                </div>
                                }
                                {this.state.step === 1 && this.state.message.length === 0 &&
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
                                {this.state.step === 3 && this.state.message.length !== 0 &&
                                    <div className="u-center-text u-padding-big-vert">

                                    <span className="book-form-message book-form-message-animated"><i className="fas fa-paper-plane"></i> {this.state.message}</span>

                                    <button className="btn btn--previous btn--animated u-center-text" onClick={this.reset}>Go Back</button>

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