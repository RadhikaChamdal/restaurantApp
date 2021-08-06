import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from 'axios'
import useStyles from './updateFormDialog.style'


const UpdateForm = (props) => {
  const { currentId, setNewMeal } = props

  const classes = useStyles();


  const [open, setOpen] = useState(false);
    const [food, setFood] = useState();
    const [drink, setDrink] = useState();
    const [price, setPrice] = useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newMealData = {
    foodName: food,
    drinkName: drink,
    price: price,
  }



  const updateMeals = () => {
    Axios.put(`http://localhost:5000/posts/${currentId}`, newMealData).then((response) => {
      setNewMeal(response.data)
      console.log(response)
    });
    setOpen(false)
   
  }

  useEffect(() => {
    updateMeals()
  }, [])
   
  return (
    <>
      <div className={classes.buttonPos}>
         <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
        Update Meal
      </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title">Update this meal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type in the fields below to update your own meal!
          </DialogContentText>
          <TextField
            label="Enter Food"
            type="text"
            onChange={(event) => {setFood(event.target.value)}}
            fullWidth
          />
          <TextField
            label="Enter Drink"
            type="text"
            onChange={(event) => {setDrink(event.target.value)}}
            fullWidth
          />
          <TextField
            label="Enter Price"
            type="number"
            onChange={(event) => {setPrice(event.target.value)}}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateMeals} color="primary">
            Update meal
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateForm;