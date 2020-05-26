import React, { Component } from 'react'
import './App.css';
import Homepage from '../homepage/homepage';
import Loginpage from '../loginpage/loginpage'
import { Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={"/"} render={() => 
            <Homepage />
          }/>
          <Route exact path={"/login"} render={() => 
            <Loginpage />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
