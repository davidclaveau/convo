import React, { useState, useEffect } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { UserContext } from './contexts/user-context'
import axios from "axios";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation"
import Conversations from "./components/Conversations"
import User from './User';
import Users from './Users';

const App = () => {
  const [user, setUser] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  });

  useEffect(() => {
    // Check if the user is already logged in through sessions
    axios.get("http://localhost:3000/logged_in",
      { withCredentials: true }
    )
    .then(response => {
      if (response.data.logged_in && user.loggedInStatus === "NOT_LOGGED_IN") {
        setUser({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
        console.log("howdy", response.data.user)
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
  }, [])


  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Dashboard 
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
            <Route
              exact
              path="/conversations"
              component={Conversations}
            />
          </Switch>
        </Router> 
      </UserContext.Provider>
    </>
  );
};

export default App;