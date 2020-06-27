import React, { Component } from 'react';
import SectionAPI from '../../components/dashboard/_sectionAPI'
import SectionUpload from '../../components/dashboard/_sectionUpload'
import SectionTestimonials from '../../components/dashboard/_sectionTestimonials'

class Dashboard extends Component {
    
    render () {
        return (
            <div>
                { this.props.user ? 
                <div>
                    <SectionAPI {...this.props} />
                    <SectionUpload />
                    <SectionTestimonials />
                </div>
                :
                this.props.history.push('/login')
                }
            </div>
        )
    }
}
export default Dashboard