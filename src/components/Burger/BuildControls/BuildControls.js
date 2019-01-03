import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const buildcontrols=(props)=>{
    const controls=[
    
    {label: "Cheese", type: 'cheese'},
     {label: "Bacon", type: 'bacon'},
     {label: "Salad", type: 'salad'},
     {label: "Meat", type: 'meat'}
    
];

    return(
    <div className={classes.BuildControls}>
        <h4 className={classes.h4}>Price: Rs. {props.price}</h4>
        {controls.map(ctrl =>{
         return (
        <BuildControl key={ctrl.label} 
        label={ctrl.label} 
        added={()=>props.addIngredient(ctrl.type)} 
         removed = {props.removeIngredient.bind(this,ctrl.type)} 
         disabled={props.disabled[ctrl.type]} />
)}
            )}
            
        <button className={classes.OrderButton} disabled={!props.disabledOrder} onClick={props.order}>ORDER NOW</button>
        </div>
);
}

export default buildcontrols;