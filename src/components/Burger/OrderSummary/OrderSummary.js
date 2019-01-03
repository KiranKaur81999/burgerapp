import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';



const ordersummary=(props)=>{
    
    let ordered = Object.keys(props.ingredients)
.map(igkey=>{
    return (<li key={igkey}><span style={{textTransform : 'capitalize'}}>{igkey} : </span>{props.ingredients[igkey]}</li>)
});
    
return(    
 <Aux>
    <h4>Your Order:</h4>
    <p>A delicious burger has the following ingredients :</p>
    <ul>
   <strong> {ordered} </strong>
    </ul>
    <p><strong>Total Price: {props.price}</strong></p>
    <p>Continue to Checkout ?</p>
    <Button clicked={props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
    <Button clicked={props.purchaseContinued} btnType='Success'>CONTINUE</Button>
    
    </Aux>
    );
}
export default ordersummary;
