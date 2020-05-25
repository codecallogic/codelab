import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class sectionLogin extends Component {
    render () {
        return (
            <section className="section-login">
                <Link to='/' className=''>Home</Link>
                <div className="row section-login-row">
                    <div className="col-1-of-1">
                        <div className="section-login-container">
                            <div className="section-login-box">
                                <form className="form" action="">
                                    {/* <h2 className="heading-secondary">Login</h2> */}
                                    <div className="form-group">
                                        <input type="text" placeholder="Username" autocomplete="off" />
                                        <label for="fullname">Username</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" placeholder="Password" autocomplete="off" />
                                        <label for="email">Password</label>
                                    </div>
                                    
                                    <div className="form-group">
                                        <button className="btn-submit" type="Submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default sectionLogin