import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios'


import useStyles from './deleteButton.style';


const DeleteButton = (props) => {
  const { currentId } = props

  const deletePost = () => {
    Axios.delete(`http://localhost:5000/posts/${currentId}`)
    console.log("inside delete button")
  }

  // useEffect (()=> {
  //   deletePost()
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
        >
          Delete
            </Button>
            </div>
    )   
    }

export default DeleteButton