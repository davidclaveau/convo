import React, { useState } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/auth/Registration";
import User from '../components/User';
import Users from '../components/Users';

const App = () => {
  const [user, setUser] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  });

  const handleLogin = (data) => {
    setUser({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} handleLogin={(data) => handleLogin(data)} loggedInStatus={user.loggedInStatus} />
            )}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/registration"
            component={Registration}
          />
          <Route
            exact
            path="/users/"
            component={Users}
          />
          <Route
            exact
            path="/users/:username"
            component={User}
          />
        </Switch>
      </Router> 
    </>
  );
};

export default App;