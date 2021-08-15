import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import UpdateForm from "../../Organisms/updateFormDialog/updateFormDialog";

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

  fetchMeals()

  useEffect(() => {
    fetchMeals();
  }, [newMeal]);

  const newMealData = () => {
    setNewMeal()
  }


  //add meal functionality
  const addMeal = (addedMeal) => {
    cartHandler([...cartItems, addedMeal]);

    console.log(cartItems, "cartItemsss");

    function getNbOccur(id, cartVals) {
      var occurs = 0;

      for (var i = 0; i < cartVals.length; i++) {
        if ("_id" in cartVals[i] && cartVals[i]._id === id) occurs++;
      }
      console.log(occurs, "occurs");
      return occurs;
    }

    getNbOccur(cartItems.id, cartItems);

    console.log(cartItems[0]);

    cartItems?.map((ar) => {
      const number = getNbOccur(ar.id, cartItems);
      ar.no = number;
    });

    const ids = cartItems.map((o) => o.id);
    console.log(ids, "ids");

    const filteredArray = cartItems.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );

    console.log(filteredArray, "filteredArray");
    return filteredArray;
  };

  // const mealCount = (id, cartItems) => {
  //   let count = 0;

  //   for (let i = 0; i < cartItems; i++) {
  //     if ("id" in cartItems[i] && cartItems[i].id === id) count++;
  //   }
  //   return count;

  // };
  // mealCount();

  console.log(cartItems, "cartItems");


  

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
