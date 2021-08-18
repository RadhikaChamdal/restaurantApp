import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import useStyles from "./ShoppingList.style";
import UpdateForm from "../updateFormDialog/updateFormDialog";
import DeleteButton from "../../Atoms/DeleteButton/deleteButton";
import Axios from 'axios'
import { Button } from "@material-ui/core";

const ShoppingList = (props) => {
  const { cartItems, newMealData, currentId } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
   const [newData, setNewData] = React.useState(false)

 

  const fetchShoppingMeals = () => {
    Axios.get(`http://localhost:5000/posts`).then((response) => {
      let meal = response.data;
      console.log(meal);
    
    });
  };

  useEffect(()=>{
    fetchShoppingMeals()
  }, [newData])


  console.log(newData, "newData")


  const handleClick = () => {
    setOpen(!open);
  };

  function getNbOccur(id, cartVals) {
    console.log(id, cartVals, "cold 2.0");
    var occurs = 0;

    for (var i = 0; i < cartVals.length; i++) {
      if ("_id" in cartVals[i] && cartVals[i]._id === id) occurs++;
    }
    console.log(occurs, "occurs");
    return occurs;
  }

  cartItems &&
    cartItems?.map((ar) => {
      const number = getNbOccur(ar._id, cartItems);
      ar.numberOfMeals = number;
    });

  const ids = cartItems && cartItems?.map((o) => o._id);
  console.log(ids, "ids");

  const filteredArray =
    cartItems &&
    cartItems.filter(({ id }, index) => !ids.includes(id, index + 1));

  const filteredArr =
    filteredArray &&
    filteredArray.reduce((acc, current) => {
      console.log(acc, current, "current");
      const matcher = acc.find((item) => item._id === current._id);
      console.log(matcher, "matcher");
      if (!matcher) {
        console.log(acc.concat([current]), "acc0");
        return acc.concat([current]);
      } else {
        console.log(acc, "acc");
        return acc;
      }
    }, []);

  console.log(filteredArr, "filteredArr");

  return (
    <>
      <div className={classes.listContainer}>
        {/* <Button onClick={fetchShoppingMeals}>TESTING</Button> */}
        <h1 style={{ color: "#ffbc8b", width: "13em" }} onClick={handleClick}>
          View Your Shopping Cart
          {open ? <ExpandLess /> : <ExpandMore />}
        </h1>
        <Collapse in={open}>
          {filteredArr &&
            filteredArr.map((obj) => (
              <List>
                <ListItem className={classes.listItemContainer} divider>
                  <ListItemText
                    className={classes.listItem}
                    primary={`Food Name:${obj.foodName}`}
                  />
                  <ListItemText
                    className={classes.listItem}
                    primary={`Drink Name:${obj.drinkName}`}
                  />
                  <ListItemText
                    className={classes.listItem}
                    primary={`Price:${obj.price}`}
                  />
                  <ListItemText
                    className={classes.listItem}
                    primary={`Quantity:${obj.numberOfMeals}`}
                  />
                  <ListItemSecondaryAction
                    className={classes.updateButtonContainer}
                  >
                    <div className={classes.deleteContainer}>
                    <DeleteButton currentId={obj._id}> </DeleteButton>
                    </div>
                    <div className={classes.updateContainer}>
                    <UpdateForm setNewData={setNewData} currentId={obj._id} />
                    </div>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            ))}
        </Collapse>
      </div>
    </>
  );
};

export default ShoppingList;
