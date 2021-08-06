import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useAuth0} from '@auth0/auth0-react'
import { navigate } from "@reach/router"
import HomePage from '../HomePage/HomePage'
import useStyles from './LoginPage.style'
import LandingPage from "../LandingPage/LandingPage";

const LoginPage = () => {
  const {loginWithRedirect, isAuthenticated} = useAuth0()
  const classes = useStyles()

  
  return (
    <>
    <div className={classes.loginContainer}>
    <Typography className={classes.loginHeader}> Select log in to continue</Typography>
    <div className={classes.buttonContainer}>
      <Button className={classes.loginButton} onClick={loginWithRedirect}>Login</Button>
    </div>

  {isAuthenticated ? navigate(`http://localhost:3000/home`) : 'Your currently logged out!'}
      </div>
      
    </>
  );
};

export default LoginPage;
