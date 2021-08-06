import React from 'react';
import SingleCard from '../../Atoms/Card/Card';
import Typography from '../../Atoms/Typography/Typography'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from '@material-ui/core/Button';



const MultipleCards = (props) => {
    const {data} = props

    

    return(
        <>
        {data.map((obj) => (
            <> 
             <Card >
          <CardContent>
            <Typography  color="textSecondary" gutterBottom text={obj.headerText} />
            
            <Typography variant="h5" component="h2" text={obj.foodName} />
            

            <Typography  color="textSecondary" text={obj.drinkName} />
            
            <Typography variant="body2" component="p" text={obj.priceNumber} />
           
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
            </>
        ))}
     </>  
    )
}


export default MultipleCards