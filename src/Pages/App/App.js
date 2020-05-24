import React, { Component } from 'react'
import './App.css';
import Homepage from '../homepage/homepage';
import { Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={"/"} render={() => 
            <Homepage />
          }/>
          <Route exact path={"/callback"} render={() => 
           <Homepage />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
