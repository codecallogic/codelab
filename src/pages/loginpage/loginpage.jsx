import React, { Component } from 'react';
import SectionLogin from '../../components/loginpage/_sectionLogin'

class LoginPage extends Component {
    render () {
        return (
            <div>
                {this.props.user ? 
                    this.props.history.push('/admin')
                    :
                    <SectionLogin {...this.props}/>
                }
            </div>
        )
    }
}
export default LoginPage