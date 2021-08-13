import React, {useState} from "react";

import mediumBackground from "../../Assets/mediumBackground.jpg";
import Button from "@material-ui/core/Button";
import Cards from "../../Molecules/Cards/Cards";
import { Match } from "@reach/router";
import useStyles from "./HomePage.style";
import FormDialog from "../../Molecules/Form/Forms";
import Navigation from "../../Organisms/NavigationBar/NavigationBar";

const HomePage = () => {
  const classes = useStyles();

  const [cartItems, setCartItems] = useState('')
  
  const cartHandler = (item) => {
    setCartItems(item)
  }
return (
    <>
      <div className={classes.container}>
        <Navigation />

        <img
          className={classes.image}
          src={mediumBackground}
          alt="background"
        />
        <h1 className={classes.text}>Radhika's</h1>
        <Button className={classes.btn} disabled={true}>
          Scroll down to see our meals
        </Button>
      </div>
      <h1 className={classes.header}>Take a look at all of our meals!</h1>
      <>
        <Cards cartItems={cartItems} cartHandler={cartHandler} />
      </>
      <>
        <h1 className={classes.header}>How about adding your own meal!</h1>
        <FormDialog className={classes.formDialog} />
      </>
    </>
  );
};

export default HomePage;
