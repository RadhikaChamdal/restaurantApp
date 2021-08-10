import React from "react";

import mediumBackground from "../../Assets/mediumBackground.jpg";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";
import useStyles from "./shoppingCartPage.style";
import Navigation from "../../Organisms/NavigationBar/NavigationBar";

const ShoppingCartPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <img className={classes.image} src={mediumBackground} alt="background" />

      <div>
        <h1 className={classes.text}>Radhika's</h1>
        <Button className={classes.btn} disabled={true}>
          Scroll down to check out your cart!
        </Button>
      </div>
      <h1 className={classes.header}> Cart Items </h1>
      
    </>
  );
};

export default ShoppingCartPage;
