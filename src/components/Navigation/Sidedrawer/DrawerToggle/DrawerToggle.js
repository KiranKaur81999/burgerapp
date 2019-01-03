import React from 'react';

const drawerToggle=(props)=>{
    return(
     <div onClick={props.togglerclicked}>
        <i className="glyphicon glyphicon-menu-hamburger" style={{color: 'white'}}></i>
        </div>
    );
}

export default drawerToggle;

