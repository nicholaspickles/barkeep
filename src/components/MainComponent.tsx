import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { DrinkData } from "../shared/products";

//Components
import Head from "./HeaderComponent";
import Foot from "./FooterComponent";
import Landing from "./Landing";
import Products from "./products/Products";
import IndividualProduct from "./products/indivProduct";
import About from "./About";
import Contact from "./Contact";
import Convert from "./convertPage/Convert";
import Checkout from "./Checkout";

const Main = () => {
  const ProductWithID = ({ match }) => {
    const dr = DrinkData.find((d) => {
      return parseInt(match.params.id) === d._id;
    });

    return <IndividualProduct product={dr} />;
  };

  return (
    <div>
      <Router>
        <Head />
        <div className="body" style={{ height: "100%", minHeight: "100%" }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductWithID} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/convert" component={Convert} />
            <Route path="/checkout" component={Checkout} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Foot />
      </Router>
    </div>
  );
};

export default Main;
