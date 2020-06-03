import React, { Component } from 'react'
import './App.css';
import HomePage from '../homepage/homepage';
import LoginPage from '../loginpage/loginpage'
import SignUpPage from '../signuppage/signuppage'
import DashboardPage from '../dashboard/dashboardpage'
import { Route, Switch} from 'react-router-dom'
import userService from '../../utils/userService'
import tokenService from '../../utils/tokenService';

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

  handleSignUporLogin = () => {
    this.setState({ user: userService.getUser()})
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={"/"} render={() => 
            <HomePage 
              user={this.state.user}
            />
          }/>
          <Route exact path={"/login"} render={({history}) => 
            <LoginPage
              history={history}
              user={this.state.user}
              handleLogOut={this.handleLogOut}
              handleSignUporLogin={this.handleSignUporLogin}
            />
          }/>
          <Route exact path={"/signup"} render={({history}) => 
            <SignUpPage 
              history={history}
              user={this.state.user}
              handleLogOut={this.handleLogOut}
              handleSignUporLogin={this.handleSignUporLogin}
            />
          }/>
          <Route exact path="/admin" render={() => 
            <DashboardPage user={this.props.state} />
          }/>
        </Switch>
      </div>
    )
  }
}

export default App;
