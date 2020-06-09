import React, { Component } from 'react';
import SectionAPI from '../../components/dashboard/_sectionAPI'
import SectionUpload from '../../components/dashboard/_sectionUpload'

class Dashboard extends Component {
    render () {
        return (
            <div>
                <SectionAPI {...this.props} />
                <SectionUpload />
            </div>
        )
    }
}
export default Dashboard