import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import HomePage from "../HomePage/HomePage";

// import useStyles from './shoppingCart.style'
const ShoppingCartPage = () => {

    // const classes = useStyles()

 

  return (
      <>
         <header>View your basket!</header>
      <Button>Back</Button>
      {/* {cart?.map((eachMeal) => (
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Meal Name
            </Typography>
            <Typography component="h2" >
              {`Food:${eachMeal.foodName}`}
            </Typography>
            <Typography component="h2" >
              {`Drink:${eachMeal.drinkName}`}{" "}
            </Typography>
            <Typography component="h2" >
              {" "}
              {`Price:${eachMeal.price}`}{" "}
            </Typography>
          </CardContent>

          <CardActions>
            <DeleteButton currentId={eachMeal._id} />
            <UpdateForm setNewMeal={setNewMeal} currentId={eachMeal._id} />
          </CardActions>
        </Card>
      ))} */}
    </>
  );
};

export default ShoppingCartPage;
