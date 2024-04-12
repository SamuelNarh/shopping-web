import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import SignInPage from "./Pages/SignInPage";
import SignupPage from "./Pages/SignupPage";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signin" exact>
          <SignInPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
