import React, { useState, useEffect } from "react";
import MultipleCards from "../../Molecules/MultipleCards/MultipleCards";


const Card = () => {

    let dataVal=[
        {headerText: 'test', foodName:'test', drinkName: 'test', priceNumber:"12"}
    ]
    return(
        <>
        <MultipleCards data={dataVal} />
        </>
    )
}

export default Card