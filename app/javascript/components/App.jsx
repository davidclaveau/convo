import React from "react";
import Routes from "../routes/Index";
import { Route, Switch } from 'react-router-dom';
import Users from './Users/Users';
import User from './User/User';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/users/:username" component={User} />
    </Switch>
  );
};

export default App;