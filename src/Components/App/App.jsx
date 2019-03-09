import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './app.scss'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm';
import WelcomeScreen from '../Home/WelcomeScreen';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)

const App = () => (
  <div className="app">
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
     <Router>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={WelcomeScreen} />
        </Switch>
      </Router>
      </MuiThemeProvider> 
  </div>
)

export default App
