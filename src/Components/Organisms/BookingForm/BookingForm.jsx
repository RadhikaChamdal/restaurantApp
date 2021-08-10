import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";

const BookingForm = () => {
  return (
      <Grid container justifyContent = 'space-around'>
      <TextField
        id="date"
        label="Enter Booking Date"
        type="date"
        defaultValue="2017-05-24"
        //   className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="number"
        label="Number of people"
        type="number"
        defaultValue=""
        //   className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue=""
        //   className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    <Button variant="filled" color='primary'>Confirm Booking</Button>
      </Grid>
   
  );
};

export default BookingForm;
