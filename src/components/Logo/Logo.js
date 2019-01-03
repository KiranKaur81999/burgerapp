import React from 'react';
import Burgerlogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const logo=()=>(
<div className={classes.Logo}>
    <img src={Burgerlogo} alt='burger logo'/>
    </div>
);

export default logo;