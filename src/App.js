import React from "react";
import "./App.css";
import Navigation from "./Components/Header/Pages/Navigation";
// import Product from "./Components/Products/Components/Product";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/Form/SignIn";
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
          {/* <Product/> */}
          <Footer />
        </Route>
        <Route path="/signin" exact>
          <Navigation />
          <SignIn />
          <Footer />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
