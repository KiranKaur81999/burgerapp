import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Drawertoggle from '../Sidedrawer/DrawerToggle/DrawerToggle';


const toolbar=(props)=>{
    return(
    <header className={classes.Toolbar}>
        <Drawertoggle togglerclicked={props.clicked}/>
         <div className={classes.Logo}>
          <Logo/>
         </div>
        <nav className={classes.Display}>
        <NavigationItems/>
        </nav>
        </header>
    );
}

export default toolbar;