import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Router } from "@reach/router";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ShoppingCartPage from "../src/Components/ShoppingCartPage/shoppingCartPage";


ReactDOM.render(
  <Auth0Provider
    domain="restaurantapplication.us.auth0.com"
    clientId="XDo0CLA6izkypsyBOvfM8vyOT2EPBzhq"
    redirectUri={window.location.origin}
  >

      <Router>
        <HomePage path="/" />
        <ShoppingCartPage path="/cart" />
      </Router>
  
  </Auth0Provider>,
  document.getElementById("root")
);
