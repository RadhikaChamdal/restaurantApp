import React from 'react';
import SingleCard from '../../Atoms/Card/Card';
import Typography from '../../Atoms/Typography/Typography'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import useStyles from './MultipleCards.style';
import DeleteButton from '../../Atoms/DeleteButton/deleteButton';
import ShoppingCart from '../../Atoms/ShoppingCart/shoppingCart';



const MultipleCards = (props) => {
    const {data} = props

    const classes = useStyles()

    return(
        <>
        {data.map((obj) => (
            <> 
             <Card className={classes.root}>
          <CardContent>  
            <Typography className={classes.titles} variant="h5" component="h2" text={`Food Name:${obj.foodName}`} />
            <Typography className={classes.titles} color="textSecondary" text={`Drink Name: ${obj.drinkName}`} />
            <Typography className={classes.titles} variant="body2" component="p" text={`Price: ${obj.price}`} />
          </CardContent>
          <CardActions className={classes.container}>
            <DeleteButton currentId={obj.id}/>
            <ShoppingCart />
          </CardActions>
        </Card>
            </>
        ))}
     </>  
    )
}


export default MultipleCards