import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import userService from '../../utils/userService'

class sectionSignUp extends Component {

    state = {
        username: '',
        password: '',
        passwordConf: '',
        alert: '',
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        if(this.state.username && this.state.password === this.state.passwordConf){
            try {
                await userService.signup(this.state)
                this.props.history.push('/')
            } catch (err) {
                this.setState({alert: err.message})
            }
        }else{
            if(this.state.password !== this.state.passwordConf){
                this.setState({alert: `Passwords Don't Match`})
            }
            if(!this.state.username){
                this.setState({alert: `Username is empty`})
            }
        } 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isFormInvalid() {
        return !(this.state.username && this.state.password === this.state.passwordConf);
    }
    
    render () {
        return (
            <section className="section-signup">
                <Link to='/' className=''>Home</Link>
                <Link to='/login' className=''>Log In</Link>
                <div className="row section-signup-row">
                    <div className="col-1-of-1">
                        <div className="section-signup-container">
                            <div className="section-signup-box">
                                <form className="form" onSubmit={this.handleSubmit}>
                                    {/* <h2 className="heading-secondary">Login</h2> */}
                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} autoComplete="off"/>
                                        <label>Username</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} autoComplete="off"/>
                                        <label>Password</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="password" name="passwordConf" placeholder="Confirm Password" className="form-group-confirm" value={this.state.passwordConf} onChange={this.handleChange} autoComplete="off"/>
                                        <label>Confirm Password</label>
                                    </div>

                                    
                                    <div className="form-group">
                                        <button className="btn-submit" >Sign Up</button>
                                    </div>

                                    <p className="form-group-alert">{this.state.alert}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default sectionSignUp