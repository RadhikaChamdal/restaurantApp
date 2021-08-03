import React from "react";
import { Router, Link } from "@reach/router";
import HomePage from "../HomePage/HomePage";
import ShoppingCartPage from "../ShoppingCartPage/shoppingCart";
import Navigation from "../NavigationBar/NavigationBar";


const LandingPage = () => {
 
  return (
    <div>
      <Navigation>
        <Link to="home">Home Page </Link>
        <Link to="cart">View the cart </Link>
          </Navigation>
        {/* <HomePage /> */}
          
        <Router>
      <HomePage path="home" />
      <ShoppingCartPage path="cart" />
    </Router>
    </div>
  );
};

export default LandingPage;
