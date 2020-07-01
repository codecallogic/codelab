import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer-logo-box">
                    <img src="https://i.imgur.com/OZx2M1O.png" alt="Footer Logo" className="footer-logo"/>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer-navigation">
                        <ul className="footer-list">
                            <li className="footer-item"><a href="/" className="footer-link"><i className="fas fa-home"></i> Home</a></li>
                            <li className="footer-item"><a href="https://github.com/codecallogic" className="footer-link" target="_blank"><i className="fab fa-github"></i> Github</a></li>
                            <li className="footer-item"><a href="https://www.linkedin.com/in/fabricio-guardia/" className="footer-link" target="_blank"><i className="fab fa-linkedin"></i> Linkedin</a></li>
                            <li className="footer-item"><a href="/testimonials" className="footer-link"><i className="fas fa-comment" target="_blank"></i> Add Testimonial</a></li>
                            {/* <li className="footer-item"><a href="/admin" className="footer-link"><i class="fas fa-users-cog"></i> Admin</a></li> */}
                        </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer-copyright">
                            Built by <a href="/" className="footer-link">Jose Fabricio Guardia </a> &copy; Copyright 2020. Created with the in demand technologies, integrated with modern security practices, and designed for the future.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer