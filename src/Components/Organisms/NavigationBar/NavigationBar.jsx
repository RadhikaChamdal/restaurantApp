import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "@reach/router";
import {useAuth0} from '@auth0/auth0-react'
import Button from '@material-ui/core/Button';
import useStyles from "./NavigationBar.style";
import LoginButton from "../../Atoms/LoginButton/LoginButton";
import LogOut from "../../Atoms/logoutButton/logoutButton";
import { Typography } from "@material-ui/core";


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

<div className={classes.buttonContainer}>
      <AppBar  position="static">
        <Toolbar variant="dense">
        
          <Link style={{textDecoration:"none"}} to="/">
              <Button className={classes.button2}>
             <Typography className={classes.homePage}>Home Page</Typography>
              </Button>
          </Link>
          
          {/* <Link style={{textDecoration:"none"}} to="cart">
          <Button className={classes.button2}>
          <Typography>View the Cart</Typography>
              </Button>
          </Link> */}
          <Link style={{textDecoration:"none"}} to="booking">
          <Button className={classes.button2}>
          <Typography>Bookings</Typography>
              </Button>
              </Link>
          {AuthNav()}
          
        </Toolbar>
      </AppBar>
      </div>
     
    </>
  );
};

export default Navigation;
