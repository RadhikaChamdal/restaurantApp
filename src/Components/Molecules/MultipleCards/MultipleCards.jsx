import React from 'react';
import Typography from '../../Atoms/Typography/Typography'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import useStyles from './MultipleCards.style';
import ShoppingCart from '../../Atoms/ShoppingCart/shoppingCart';

const MultipleCards = (props) => {
    const {data, addMeal, newMealData} = props
    const classes = useStyles()

    // TO BE ON THE HOME PAGE 
    return(
      <>
        <>
        {data.map((obj) => (
          <>
             <Card cardStyle="allCards" className={classes.root}>
          <CardContent>  
            <Typography className={classes.titles} variant="h5" component="h2" text={`Food Name:${obj.foodName}`} />
            <Typography className={classes.titles} color="textSecondary" text={`Drink Name: ${obj.drinkName}`} />
            <Typography className={classes.titles} variant="body2" component="p" text={`Price: ${obj.price}`} />
            <Typography className={classes.titles} variant="body2" component="p" text={`Quantity: ${obj.numberOfMeals}`} />
          </CardContent>
          <CardActions className={classes.container}>
            {/* <DeleteButton currentId={obj._id} /> */}
            <ShoppingCart addMeal={addMeal} currentId={obj._id}/>
            {/* <UpdateForm newMealData={newMealData} currentId={obj._id} /> */}
          </CardActions>
        </Card>
          </>  
        ))}
     </>  
          </>
    )
}


export default MultipleCards