import React from 'react';
import classes from './Sidedrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sidedrawer=(props)=>{
     let attachedclasses = [classes.Sidedrawer, classes.Close].join(' ');
    if(props.open){
        attachedclasses = [classes.Sidedrawer, classes.Open].join(' ');
    }
    
    return(
    <Aux>
    <Backdrop show={props.open} backdrop={props.closed}/>
    <div className={attachedclasses} >
        <div className={classes.Logo}>
        <Logo/>
         </div>
         <nav>
           <NavigationItems />
         </nav>
        </div>
        </Aux>
    )
}

export default sidedrawer;