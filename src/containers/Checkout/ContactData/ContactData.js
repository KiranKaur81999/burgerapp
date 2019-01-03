import React , {Component} from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
    
    state={
        loading: false,
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:"text",
                    name:"name",
                    placeholder:"Your Name"
                },
                value: ''
            },
            
             email:{
                elementType:'input',
                elementConfig:{
                    type:"email",
                    name:"email",
                    placeholder:"Your E-Mail"
                },
                value: ''
        },
            
             street:{
                elementType:'input',
                elementConfig:{
                    type:"text",
                    name:"street",
                    placeholder:"Your Street"
                },
                value: ''         
        },
               pincode:{
                elementType:'input',
                elementConfig:{
                    type:"text",
                    name:"pincode",
                    placeholder:"Your Pin Code"
                },
                value: ''
        },
             DeliveryMethod:{
                 elementType:'select',
                 elementConfig:{
                     options:[
                         {value:'fastest', displayValue:'Fastest'},
                         {value:'cheapest', displayValue:'Cheapest'}
                     ]
                 },
                 value:'fastest'
             }
     }
    }
    
    orderHandler=(event)=>{
        event.preventDefault();
       // console.log(this.props.ingredients);
        const formData={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier]= this.state.orderForm[formElementIdentifier].value; 
        }
        
         const order = {
        ingredients : this.props.ingredients,
        price: this.props.price,
        orderData: formData
        
    }
    
    
 this.setState({loading: true});
    
    axios.post('/orders.json',order).then(response=>{
        this.setState({loading: false });
    }).catch(error=>{ this.setState({loading:false}); });
   
    }
    
    
inputChangedHandler=(event,FormElementIdentifier)=>{
   const  updatedForm= {...this.state.orderForm};
   const  updatedFormElements ={...updatedForm[FormElementIdentifier]};
    updatedFormElements.value = event.target.value;
    updatedForm[FormElementIdentifier] = updatedFormElements;
    this.setState({orderForm:updatedForm});
 
}
    
    render(){
        
        const FormElements =[];
        for(let key in this.state.orderForm){
            FormElements.push({
                id:key,
                config: this.state.orderForm[key]
            });
        }
        
      //  console.log(FormElements);
        
        return(
         <div className ={classes.ContactData}>
            <h4>Enter Your Contact Data</h4>
            <form onSubmit={this.orderHandler}>
            {FormElements.map(order=>{
            return <Input key={order.id} elementType={order.config.elementType} 
            elementConfig={order.config.elementConfig} 
            value={order.config.value} changed={(event)=>this.inputChangedHandler(event,order.id)}/>
            })}
            <Button btnType="Success">ORDER</Button>
            </form>
            </div>
        );
    }
}

export default ContactData;