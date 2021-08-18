import React from "react";
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

const ShoppingList = (props) => {
  const { cartItems, newMealData } = props;
  console.log(props, 'testingpropss')

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

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
                    <UpdateForm   newMealData={newMealData} currentId={obj._id} />
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
