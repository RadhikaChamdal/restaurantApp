import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./shoppingCart.style";

const ShoppingCart = (props) => {
    const {onClick} = props


  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
              className={classes.button}
              onClick = {onClick}
              startIcon={<ShoppingCartIcon />}
      >

      </Button>
    </div>
  );
};

export default ShoppingCart;
