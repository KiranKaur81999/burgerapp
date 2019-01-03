import React from 'react';
import classes from './Input.module.css';

const input=(props)=>{
    let inputElement = null;
    
    switch(props.elementType){
        case 'input': inputElement= <input onChange={props.changed} 
            {...props.elementConfig} 
            className={classes.InputElement}/>;
                       break;
            
        case 'textarea': inputElement= <textarea onChange={props.changed} 
            {...props.elementConfig}
            className={classes.InputElement}/>
                       break;
            
        case 'select': inputElement= (<select className={classes.InputElement} onChange={props.changed}>
                        {props.elementConfig.options.map(option=>{
                         return <option value={option.value} key={option.value}>{option.displayValue}</option>
                        })}
            
                       </select>);
                       break;
        default: inputElement= <input {...props.elementConfig} className={classes.InputElement}/>;
                       
    }
    
    return(
     <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        
        </div>
    );
}

export default input;