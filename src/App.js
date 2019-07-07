import React, {Component} from 'react';
import Aux from "./hoc/Auxiliary";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from 'react-router-dom';
import Orders from "./containers/Orders/Orders";

class App extends Component{
  render() {
    return (
        <Aux>
            <Layout>
                <Switch>
                    <Route exact path={'/'} component={BurgerBuilder}/>
                    <Route path={'/checkout'} component={Checkout}/>
                    <Route path={'/orders'} component={Orders}/>
                </Switch>
            </Layout>
        </Aux>
    );
  }
}

export default App;
