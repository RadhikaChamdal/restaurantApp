import React, {useState} from "react";
import Axios from 'axios';
import mediumBackground from "../../Assets/mediumBackground.jpg";
import Button from "@material-ui/core/Button";
import useStyles from "./shoppingCartPage.style";
import Navigation from "../../Organisms/NavigationBar/NavigationBar";
import MultipleCards from "../../Molecules/MultipleCards/MultipleCards";

const ShoppingCartPage = (props) => {
  const {currentId, cart} = props
  console.log(props)
  const classes = useStyles();
  
 let mockData = [{foodName: 'bread', drinkName: 'water'}, {foodName: 'bread', drinkName: 'water'}, {foodName: 'bread', drinkName: 'water'}]
  return (
    <>
      <Navigation />
      <img className={classes.image} src={mediumBackground} alt="background" />

      <div>
        <h1 className={classes.text}>Radhika's</h1>
        <Button className={classes.btn} disabled={true}>
          Scroll down to check out your cart!
        </Button>
      </div>
      <h1 className={classes.header}> Cart Items </h1>
      <>
          <div className={classes.cardContainer}>
            {/* <Button currentId={currentId} onClick={fetchMealsById}>test</Button> */}
            <MultipleCards data={mockData} />
          </div>
        </>
    </>
  );
};

export default ShoppingCartPage;
