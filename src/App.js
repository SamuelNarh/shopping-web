import React from "react";
import "./App.css";
import Navigation from "./Components/Header/Pages/Navigation";
import Product from "./Components/Products/Components/Product";
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
          <Product/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
