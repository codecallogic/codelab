import React, { Component } from 'react'
import './App.css';
import Header from '../../components/header/header'
import CustomGrid from '../../components/grid/custom_grid'
import Homepage from '../homepage/homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        {/* <CustomGrid /> */}
      </div>
    )
  }
}

export default App;
