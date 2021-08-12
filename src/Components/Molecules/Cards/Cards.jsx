import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import UpdateForm from "../../Organisms/updateFormDialog/updateFormDialog";

import useStyles from "./Cards.style";
import MultipleCards from "../MultipleCards/MultipleCards";

const Cards = (props) => {
  const { currentId } = props;
  const [allMeals, setAllMeals] = useState("");
  const [newMeal, setNewMeal] = useState("");
  const [cart, setCart] = useState([]);

  const classes = useStyles();

  const fetchMeals = () => {
    Axios.get("http://localhost:5000/posts").then((response) => {
      const data = response.data;
      console.log(response);
      setAllMeals(data);
    });
  };

  console.log(allMeals, 'allmeals')
  useEffect(() => {
    fetchMeals();
  }, [newMeal]);

  const addMeal = (addedMeal) => {
    setCart([...cart, addedMeal]);
    console.log("cards are in cart", cart);
  };

  console.log("cart", cart);

  return (
    <>
      <>
        <header className={classes.cartButton}>
          <Button
            className={classes.cartBtn}
          >{`CART ITEMS: ${cart.length}`}</Button>
        </header>
      </>

      {allMeals && Array.isArray(allMeals) && allMeals.length > 0 && (
        <>
          <div className={classes.cardContainer}>
            <MultipleCards
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
