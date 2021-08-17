import React from "react";
import Axios from 'axios'
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./shoppingCart.style";

const ShoppingCart = (props) => {
  const { currentId, addMeal, ...other } = props;


  const [mealById,setMealById] = React.useState('')

  const fetchMealsById = () => {
    Axios.get(`http://localhost:5000/posts/${currentId}`).then((response) =>{
      const data = response.data
      console.log(data, 'data')
      setMealById(response.data)
      addMeal(data.meal);
    })
  }
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.shoppingCartBtn}
        onClick={fetchMealsById} // make into function
        currentId={currentId}
        startIcon={<ShoppingCartIcon />}
      ></Button>
    </div>
  );
};

export default ShoppingCart;
