import React from "react";
import MultipleCards from "../../Molecules/MultipleCards/MultipleCards";
import useStyles from './Card.style';

const Card = () => {

    const classes = useStyles()

    let dataVal=[
        {foodName:'', drinkName: '', price:""}
    ]
    return(
        <>
        <MultipleCards className={classes.allCards} data={dataVal} />
        </>
    )
}

export default Card