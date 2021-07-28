import React, { useState, useEffect } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from "../components/Home";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import User from '../components/User';
import Users from '../components/Users';
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  });

  const checkLoginStatus = () => {
    axios.get("http://localhost:3000/logged_in",
      {withCredentials: true}
    )
    .then(response => {
      // If user is logged in
      if (response.data.logged_in && user.loggedInStatus === "NOT_LOGGED_IN") {
        setUser({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && user.loggedInStatus === "LOGGED_IN") {
        setUser({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    })
    .catch(error => {
      console.log("login error", error)
    })
  }

  useEffect(() => {
    checkLoginStatus();
  }, [])

  const handleLogin = (data) => {
    setUser({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  const handleLogout = (data) => {
    setUser({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
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
              <Home 
                {...props}
                handleLogin={(data) => handleLogin(data)}
                handleLogout={(data) => handleLogout(data)}
                loggedInStatus={user.loggedInStatus} />
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