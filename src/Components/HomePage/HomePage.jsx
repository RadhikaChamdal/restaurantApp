import React from "react";

import mediumBackground from "../Assets/mediumBackground.jpg";
import Button from "@material-ui/core/Button";
import Cards from "../Cards/Cards";
import useStyles from "./HomePage.style";
import FormDialog from "../Form/Forms";
import Navigation from "../NavigationBar/NavigationBar";

const HomePage = () => {
  const classes = useStyles();

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
        <Cards />
      </>
      <>
        <h1 className={classes.header}>How about adding your own meal!</h1>
        <FormDialog className={classes.formDialog} />
      </>
    </>
  );
};

export default HomePage;
