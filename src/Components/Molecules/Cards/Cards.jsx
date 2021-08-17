import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import useStyles from "./Cards.style";
import MultipleCards from "../MultipleCards/MultipleCards";

const Cards = (props) => {
  const { currentId, cartHandler, cartItems } = props;
  const [allMeals, setAllMeals] = useState("");
  const [newMeal, setNewMeal] = useState("");

  const classes = useStyles();

  const fetchMeals = () => {
    Axios.get("http://localhost:5000/posts").then((response) => {
      const data = response.data;
      console.log(response);
      setAllMeals(data);
    });
  };

  useEffect(() => {
    fetchMeals();
  }, []);


  useEffect(() => {
    fetchMeals();
  }, [newMeal]);

  const newMealData = () => {
    setNewMeal()
  }

  //add meal functionality
  const addMeal = (addedMeal) => {
    cartHandler([...cartItems, addedMeal]);
  };


  return (
    <>
      <>
        <header className={classes.cartButton}>
          <Button
            className={classes.cartBtn}
          >{`CART ITEMS: ${cartItems.length}`}</Button>
        </header>
      </>

      {allMeals && Array.isArray(allMeals) && allMeals.length > 0 && (
        <>
          <div className={classes.cardContainer}>
            <MultipleCards
              newMealData={newMealData}
              addMeal={addMeal}
              cardStyle="cartCards"
              data={allMeals}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
