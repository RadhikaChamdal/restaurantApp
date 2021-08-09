import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UpdateForm from "../../Organisms/updateFormDialog/updateFormDialog";

import useStyles from "./Cards.style";
import DeleteButton from "../../Atoms/DeleteButton/deleteButton";
import ShoppingCart from "../../Atoms/ShoppingCart/shoppingCart";
import MultipleCards from "../MultipleCards/MultipleCards";

const Cards = (props) => {
  const { currentId } = props;
  const [allMeals, setAllMeals] = useState("");
  const [newMeal, setNewMeal] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("Meals");

  const classes = useStyles();

  const fetchMeals = () => {
    Axios.get("http://localhost:5000/posts").then((response) => {
      const data = response.data;
      setAllMeals(data);
    });
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [newMeal]);

  const addToCart = (eachMeal) => {
    setCart([...cart, eachMeal]);
    console.log("are in cart");
  };

  const nextPage = () => {
    setPage("Cart");
  };

  const backPage = () => {
    setPage("Meals");
  };

  let dataVal;
  if (allMeals) {
    dataVal = [
      {
        headerText: `${allMeals[0].foodName}`,
        foodName: `${allMeals[0].drinkName}`,
        drinkName: `${allMeals[0].price}`,
      },
      {
        headerText: `${allMeals[1].foodName}`,
        foodName: `${allMeals[1].drinkName}`,
        drinkName: `${allMeals[1].price}`,
      },
      {
        headerText: `${allMeals[2].foodName}`,
        foodName: `${allMeals[2].drinkName}`,
        drinkName: `${allMeals[2].price}`,
      },
      {
        headerText: `${allMeals[3].foodName}`,
        foodName: `${allMeals[3].drinkName}`,
        drinkName: `${allMeals[3].price}`,
      },
    ];
  }

  return (
    <>
      {/* {page === 'Meals' && ( */}
      <>
        <header className={classes.cartButton}>
          <Button className={classes.cartBtn} onClick={nextPage}>
            CART ITEMS({cart.length})
          </Button>
        </header>
      </>

      {allMeals && Array.isArray(allMeals) && allMeals.length > 0 && (
        <>
        
          <div className={classes.cardContainer}>
          {/* {allMeals.map((eachMeal) => ( */}
          <MultipleCards data={dataVal} />
          {/* ))} */}
        </div>
       
        </> 
       
      )}

      {page === "Cart" && (
        <>
          <Button className={classes.backBtn} onClick={backPage}>
            Back
          </Button>

          <div className={classes.cardContainer}>
            {cart?.map((eachMeal) => (
              
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Meal Name
                  </Typography>
                  <Typography component="h2" className={classes.titles}>
                    {`Food:${eachMeal.foodName}`}
                  </Typography>
                  <Typography component="h2" className={classes.titles}>
                    {`Drink:${eachMeal.drinkName}`}{" "}
                  </Typography>
                  <Typography component="h2" className={classes.titles}>
                    {" "}
                    {`Price:${eachMeal.price}`}{" "}
                  </Typography>
                </CardContent>

                <CardActions className={classes.container}>
                  <div className={classes.shoppingCart}>
                    <ShoppingCart onClick={addToCart} />
                  </div>

                  <DeleteButton currentId={eachMeal._id} />
                  <UpdateForm
                    setNewMeal={setNewMeal}
                    currentId={eachMeal._id}
                  />
                </CardActions>
              </Card>
            ))}
          </div>
          console.log(eachMeal._id)
        </>
      )}
    </>
  );
};

export default Cards;
