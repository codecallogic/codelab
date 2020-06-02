import React, { Component } from 'react'
import './App.css';
import HomePage from '../homepage/homepage';
import LoginPage from '../loginpage/loginpage'
import SignUpPage from '../signuppage/signuppage'
import { Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={"/"} render={() => 
            <HomePage />
          }/>
          <Route exact path={"/login"} render={() => 
            <LoginPage />
          }/>
          <Route exact path={"/signup"} render={({history}) => 
            <SignUpPage history={history}/>
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
