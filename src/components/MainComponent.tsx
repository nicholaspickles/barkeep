import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

//Components
import Head from "./HeaderComponent";
import Foot from "./FooterComponent";
import Landing from "./Landing";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
  return (
    <div>
      <Router>
          <Head />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
          <Foot />
      </Router>
    </div>
  );
};

export default Main;
