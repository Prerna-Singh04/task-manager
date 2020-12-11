import React from "react";
import "./App.css";
import Login from "../src/pages/login";
import SignUp from "../src/pages/sign-up";
import Task from "../src/pages/task";
import Users from "../src/pages/users";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
