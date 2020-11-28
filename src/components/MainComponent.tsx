import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Head from "./HeaderComponent";
import Foot from "./FooterComponent";
import Landing from "./Landing";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Convert from "./convertPage/Convert";

const Main = () => {
  return (
    <div>
      <Router>
        <Head />
        <div className="body" style={{ height: "100%", minHeight: "100%" }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/convert" component={Convert} />
          </Switch>
        </div>
        <div>
          <Foot />
        </div>
      </Router>
    </div>
  );
};

export default Main;
