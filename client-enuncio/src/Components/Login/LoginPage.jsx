import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function LoginPage() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
}

export default LoginPage;
