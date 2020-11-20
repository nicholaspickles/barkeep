import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCartNum } from "../redux/ducks/cart";

//Components
import Head from "./HeaderComponent";
import Foot from "./FooterComponent";
import Landing from "./Landing";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import { ApplicationState } from "../redux/store";

const Main = () => {
  const numInCart = useSelector(
    (state: ApplicationState) => state.cart.numInCart
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateCartNum(1));
  };

  return (
    <div>
      <Router>
        <Head />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <button onClick={handleClick}>add to cart</button>
        <h1>{numInCart}</h1>
        <Foot />
      </Router>
    </div>
  );
};

export default Main;
