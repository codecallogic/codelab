import React, { Component } from 'react';
import Header from '../../components/header/header'
import CustomGrid from '../../components/grid/custom_grid'
import SectionAbout from '../../components/homepage/_sectionAbout'
import SectionMusic from '../../components/homepage/_sectionMusic'

class Homepage extends Component {
    render () {
        return (
            <main>
                <Header />
                <SectionAbout />
                <SectionMusic />
                <CustomGrid />
            </main>
        )
    }
}
export default Homepage