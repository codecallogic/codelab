import React, { Component } from 'react'
import './App.css';
import HomePage from '../homepage/homepage';
import LoginPage from '../loginpage/loginpage'
import SignUpPage from '../signuppage/signuppage'
import { Route, Switch} from 'react-router-dom'
import userService from '../../utils/userService'

class App extends Component {
  constructor() {
      super()
      this.state = {
         user: userService.getUser()
      }
  }

  handleLogOut = () => {
    userService.logout()
    this.setState({ user: null})
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={"/"} render={() => 
            <HomePage />
          }/>
          <Route exact path={"/login"} render={() => 
            <LoginPage 
              user={this.state.user}
              handleLogOut={this.handleLogOut}
            />
          }/>
          <Route exact path={"/signup"} render={({history}) => 
            <SignUpPage 
              history={history}
              user={this.state.user}
              handleLogOut={this.handleLogOut}
            />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
