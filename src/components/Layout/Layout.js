import React , {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';



class Layout extends Component{
    
    state={
        showSideDrawer: false
    }

 closeDrawerHandler=()=>{
     this.setState({showSideDrawer: false});
 }
 
 showDrawerHandler=()=>{
     this.setState({showSideDrawer: true});
 }
 
 
    
    render(){
        return(
        <Aux>
         <Sidedrawer open={this.state.showSideDrawer} closed={this.closeDrawerHandler}/>
          <Toolbar clicked={this.showDrawerHandler}/>
         <main className={classes.Content}>
         {this.props.children}
        </main>
    </Aux>
        );
    }
}

export default Layout;