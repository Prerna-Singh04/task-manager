import React from 'react';
import './App.css';
import Login from '../src/pages/login';
import SignUp from '../src/pages/sign-up';
import Task from '../src/pages/task';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return(
      <Router basename="/">
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <Login />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/sign-up"}>
            <SignUp />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/task"}>
            <Task />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
