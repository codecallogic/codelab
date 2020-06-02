import React, { Component } from 'react';
import SectionSignUp from '../../components/signuppage/_sectionSignUp'

class SignUpPage extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <SectionSignUp {...this.props} />
            </div>
        )
    }
}
export default SignUpPage