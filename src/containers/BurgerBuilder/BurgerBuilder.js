import React ,{ Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE = {
    salad: 5,
    cheese: 15,
    meat: 49,
    bacon: 45
}


class BurgerBuilder extends Component{
    
state={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
    loading:false
}


updatePurchasableState = (ingredients)=>{
    
    
    const sum = Object.keys(ingredients)
    .map(igkey=>{
        return (ingredients[igkey])
        
    }).reduce((sum,el)=>{
            return sum + el;
        },0);
    
    this.setState({purchasable: sum>0});
}

addIngredientHandler=(type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
     
    updatedIngredients[type]= updatedCount;
    const additionPrice= INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + additionPrice ;
    this.setState({ingredients: updatedIngredients , totalPrice: newPrice });
    this.updatePurchasableState(updatedIngredients);
}


removeIngredientHandler=(type)=>{
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0)
        return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    
     updatedIngredients[type]= updatedCount;
    
    const substractionPrice= INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - substractionPrice ;
    this.setState({ingredients: updatedIngredients , totalPrice: newPrice });
    this.updatePurchasableState(updatedIngredients);
   
}

purchasingHandler=()=>{
    this.setState({purchasing: true});
}

purchaseCancelHandler=()=>{
    this.setState({purchasing: false});
}

purchaseContinueHandler=()=>{
    
    const queryParams=[];
    for(let i in this.state.ingredients){
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('Price=' + this.state.totalPrice);
    
    const queryString = queryParams.join('&');
    this.props.history.push({
        
        pathname:'/checkout',
        search: '?' + queryString
    });
    
    

}

    render(){
        
        const disabledInfo ={
            ...this.state.ingredients
        }
        
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0 ;
        }
        
    let orderSummary =    <OrderSummary ingredients={this.state.ingredients}
            purchaseCancelled = {this.purchaseCancelHandler}
        purchaseContinued ={this.purchaseContinueHandler}
            price = {this.state.totalPrice} />;
            
              
    if(this.state.loading){
        orderSummary = <Spinner/>;
    }
        
        return(
        <Aux>
            
           <Modal show= {this.state.purchasing} backdrop ={this.purchaseCancelHandler}>
            {orderSummary}
            </Modal>
            
            <Burger ingredients={this.state.ingredients}/>
            
            <BuildControls addIngredient={this.addIngredientHandler} 
            removeIngredient={this.removeIngredientHandler} 
            disabled={disabledInfo} 
            price={this.state.totalPrice}
            disabledOrder={this.state.purchasable}
            order = {this.purchasingHandler}
            />
        
            </Aux>
        
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);