import React, { Component } from 'react';
import Header from '../../components/header/header'
import SectionAbout from '../../components/homepage/_sectionAbout'
import SectionMusic from '../../components/homepage/_sectionMusic'
import SectionFeatures from '../../components/homepage/_sectionFeatures'
import SectionProjects from '../../components/homepage/_sectionProjects'
import SectionTestimonials from '../../components/homepage/_sectionTestimonials'
import SectionExperience from '../../components/homepage/_sectionExperience'
import SectionBook from'../../components/homepage/_sectionBook'
import Footer from'../../components/homepage/_footer'
import Navigation from'../../components/homepage/_navigation'
import PopUp from'../../components/homepage/_popup'

class Homepage extends Component {
    render () {
        return (
            <main>
                <Navigation />
                <Header />
                <SectionAbout />
                <SectionMusic />
                <SectionFeatures />
                <SectionProjects />
                <SectionTestimonials />
                <SectionExperience />
                <SectionBook />
                <Footer />
                <PopUp />
            </main>
        )
    }
}
export default Homepage