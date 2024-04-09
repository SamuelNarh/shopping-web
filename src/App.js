import React from "react";
import "./App.css";
import Navigation from "./Components/Header/Pages/Navigation";
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
          <Navigation />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
