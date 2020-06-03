import React, { Component } from 'react';
import SectionAPI from '../../components/dashboard/_sectionAPI'

class Dashboard extends Component {
    render () {
        return (
            <div>
                <SectionAPI {...this.props} />
            </div>
        )
    }
}
export default Dashboard