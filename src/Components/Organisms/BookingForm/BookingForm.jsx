import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import Axios from 'axios'

const BookingForm = () => {
  const [date, setDate] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [timeValue, setTimeValue] = useState();
  const [newBooking, setNewBooking]= useState()

  const formData = {
    date,
    numberOfPeople,
    timeValue,
  };

  const bookingHandler = () => {
    Axios.post(`http://localhost:5000/posts/postBooking`, formData).then((response) => {
      setNewBooking(response.data.formData)
    });   
    console.log("all booked in")
   alert("All booked for you - see you later at Radhika's")
  }



  useEffect(() => {
    bookingHandler()
  }, [])

  console.log(formData);
  return (
    <Grid container justifyContent="space-around">
      <TextField
        id="date"
        label="Enter Booking Date"
        type="date"
        onChange={(event) => {
          setDate(event.target.value);
        }}
        //   className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="number"
        label="Number of people"
        type="number"
        onChange={(event) => {
          setNumberOfPeople(event.target.value);
        }}
        //   className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="time"
        label='Time'
        type="time"
        onChange={(event) => {
          setTimeValue(event.target.value);
        }}
        //   className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button onClick={bookingHandler}>
        Confirm Booking
      </Button>
    </Grid>
  );
};

export default BookingForm;
