import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
       <Layout>
        <Switch>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/'  component={BurgerBuilder}/>
        </Switch>
        </Layout>
        
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
