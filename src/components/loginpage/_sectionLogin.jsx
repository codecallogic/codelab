import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import userService from '../../utils/userService'

class sectionLogin extends Component {

    state = {
        username: '',
        password: '',
        alert: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state)
            this.props.handleSignUporLogin()
            this.props.history.push('/')
        } catch (err) {
            this.setState({alert: err.message})
        }
    }
    
    render () {
        return (
            <section className="section-login">
                <Link to='/' className=''>Home</Link>
                {this.props.user ? 
                    <Link to='' className='' onClick={this.props.handleLogOut}>Log Out</Link>
                    :
                    <Link to='/login' className=''>Log In</Link>
                }
                <div className="row section-login-row">
                    <div className="col-1-of-1">
                        <div className="section-login-container">
                            <div className="section-login-box">
                                <form className="form" onSubmit={this.handleSubmit}>
                                    {/* <h2 className="heading-secondary">Login</h2> */}
                                    <div className="form-group">
                                        <input type="text" placeholder="Username" autoComplete="off" name="username" onChange={this.handleChange}/>
                                        <label>Username</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" placeholder="Password" autoComplete="off" name="password" onChange={this.handleChange}/>
                                        <label>Password</label>
                                    </div>
                                    
                                    <div className="form-group">
                                        <button className="btn-submit" type="Submit" >Login</button>
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