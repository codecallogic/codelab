import React, { Component } from 'react';

class Book extends Component {
    render () {
        return (
            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book-form-box">
                            <form className="book-form">
                                <div className="u-center-text">
                                <h2 className="heading-secondary u-margin-bottom-medium">
                                    Start Booking Now
                                </h2>
                                </div>
                                <div className="book-form-group">
                                    <input type="text" id="name" placeholder="Full Name" className="book-form-input" autoComplete="off" required/>
                                    <label htmlFor="name" className="book-form-label">Full Name</label>
                                </div>
                                <div className="book-form-group">
                                    <input type="email" id="email" placeholder="Email" className="book-form-input" autoComplete="off" required/>
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
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Book