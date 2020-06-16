import React, { Component } from 'react';
import Header from '../../components/header/header'
import CustomGrid from '../../components/grid/custom_grid'
import SectionAbout from '../../components/homepage/_sectionAbout'
import SectionMusic from '../../components/homepage/_sectionMusic'
import SectionFeatures from '../../components/homepage/_sectionFeatures'
import SectionProjects from '../../components/homepage/_sectionProjects'
import SectionExperience from '../../components/homepage/_sectionExperience'
import SectionBook from'../../components/homepage/_sectionBook'

class Homepage extends Component {
    render () {
        return (
            <main>
                <Header />
                <SectionAbout />
                <SectionMusic />
                <SectionFeatures />
                <SectionProjects />
                <SectionExperience />
                <SectionBook />
            </main>
        )
    }
}
export default Homepage