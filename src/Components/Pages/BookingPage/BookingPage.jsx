import React from "react";
import mediumBackground from "../../Assets/mediumBackground.jpg";
import useStyles from './BookingPage.style'
import Navigation from "../../Organisms/NavigationBar/NavigationBar";
import BookingForm from '../../Organisms/BookingForm/BookingForm'

const BookingPage = () => {
  const classes = useStyles();

  //  if logged in can make a booking 
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
        
      </div>
      <h1 className={classes.header}>Book a Table</h1>
      <BookingForm />
    </>
  );
};

export default BookingPage;