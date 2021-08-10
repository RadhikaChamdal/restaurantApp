import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./shoppingCart.style";

const ShoppingCart = (props) => {
  const { currentId } = props;

  const [cart, setCart] = useState([])

  const addToCart = (eachMeal) => {
    setCart([...cart, eachMeal]);
    console.log("are in cart");
  };


  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.shoppingCartBtn}
        onClick={addToCart}
        currentId={currentId}
        startIcon={<ShoppingCartIcon />}
      ></Button>
    </div>
  );
};

export default ShoppingCart;
