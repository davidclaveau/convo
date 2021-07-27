import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from "../components/Home";
import Login from "../components/Login";
import User from '../components/User';
import Users from '../components/Users';

const App = () => {
  return (
    <>
      <h1>Home</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/" component={Users} />
          <Route exact path="/users/:username" component={User} />
        </Switch>
      </Router> 
    </>
  );
};

export default App;