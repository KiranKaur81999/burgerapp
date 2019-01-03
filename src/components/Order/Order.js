import React from 'react';
import classes from './Order.module.css';

const order=(props)=>{
    const ingredients=[];
    for(let ingredientName in props.ingredients){
        ingredients.push({
           name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    
    const showIngredients = ingredients.map(igkey=>{
        return <span key={igkey.name} style={{
          textTransform: 'capitalize', 
          display: 'inline-block',
          margin:'0 4px',
          padding: '8px',
          boxShadow:'0 2px 3px #eee',
          boxSizing:'border-box'
        }}>
        {igkey.name} ({igkey.amount})</span>
    })
    
    return(
     <div className={classes.Order}>
        <p>Ingredients: {showIngredients}</p>
        <p>Price:<strong> Rs. {props.price}</strong></p>
        </div>
    );
}

export default order;