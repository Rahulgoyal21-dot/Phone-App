import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Box } from "grommet";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />

          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
