import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./shoppingCart.style";

const ShoppingCart = (props) => {
  const { currentId, addMeal, ...other } = props;

  const clickHandler = (event) => {
    addMeal(currentId);
    console.log("inside click");
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.shoppingCartBtn}
        onClick={clickHandler} // make into function
        currentId={currentId}
        startIcon={<ShoppingCartIcon />}
      ></Button>
    </div>
  );
};

export default ShoppingCart;
