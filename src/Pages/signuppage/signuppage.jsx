import React, { Component } from 'react';
import SectionSignUp from '../../components/signuppage/_sectionSignUp'

class SignUpPage extends Component {
    render () {
        return (
            <div>
                <SectionSignUp 
                    {...this.props} 
                />
            </div>
        )
    }
}
export default SignUpPage