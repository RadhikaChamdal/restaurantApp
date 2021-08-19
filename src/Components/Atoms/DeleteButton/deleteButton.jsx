import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Axios from "axios";

import useStyles from "./deleteButton.style";

const DeleteButton = (props) => {
  const { currentId, fetchShoppingMeals } = props;

  const [meal, setMeal] = useState('')

  const deletePost = () => {
    Axios.delete(`http://localhost:5000/posts/${currentId}`).then((response)=>{
      setMeal(response.data)
    });
    console.log("inside delete button");
  };

  // useEffect(()=>{
  //   fetchShoppingMeals()
  // }, [])


  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={deletePost}
        currentId={currentId}
      ></Button>
    </div>
  );
};

export default DeleteButton;
