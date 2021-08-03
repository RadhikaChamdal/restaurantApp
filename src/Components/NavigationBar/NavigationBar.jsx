import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Router,Link } from "@reach/router";
import {useAuth0} from '@auth0/auth0-react'
import Button from '@material-ui/core/Button';
import useStyles from "./NavigationBar.style";
import LoginButton from "../LoginButton/LoginButton";
import LogOut from "../logoutButton/logoutButton";
import HomePage from "../HomePage/HomePage";
import ShoppingCartPage from "../ShoppingCartPage/shoppingCart";

const Navigation = () => {
  const classes = useStyles();

  const AuthNav = () => {
    const {isAuthenticated} = useAuth0()
    return (
      <nav>
         {isAuthenticated ? <LogOut/> : <LoginButton /> }
      </nav>
    )
  }

  return (
    <>

      <AppBar  position="static">
        <Toolbar variant="dense">
          <Link to="home">
              <Button className={classes.button}>
              Home Page
              </Button>
 
          </Link>
          <Link to="cart">
          <Button className={classes.button}>
              View the cart
              </Button>
          </Link>
          {AuthNav()}
        </Toolbar>
      </AppBar>

     
    </>
  );
};

export default Navigation;
