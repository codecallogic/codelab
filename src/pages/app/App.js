import React, { Component } from 'react'
import './App.css';
import HomePage from '../homepage/homepage';
import LoginPage from '../loginpage/loginpage'
import SignUpPage from '../signuppage/signuppage'
import DashboardPage from '../dashboard/dashboardpage'
import Testimonials from '../testimonials/testimonials'
import { Route, Switch} from 'react-router-dom'
import userService from '../../utils/userService'
import ReactGA from 'react-ga';

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

    ReactGA.initialize('UA-173144004-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (
      <div>
        <Switch>
          <Route exact path={"/"} render={() => 
            <HomePage 
              user={this.state.user}
            />
          }/>
          <Route exact path={"/testimonials"} render={({history}) => 
            <Testimonials
              history={history}
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
          
          <Route exact path="/admin" render={({history}) => 
            <DashboardPage 
              user={this.state.user}
              history={history}
              handleLogOut={this.handleLogOut}
            />
          }/>

        </Switch>
      </div>
    )
  }
}

export default App;
