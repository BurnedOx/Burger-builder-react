import React, {Component} from 'react';
import Aux from "../../hoc/Auxiliary";
import {Route} from 'react-router-dom';
import CheckoutSummery from "../../components/CheckoutComponents/CheckoutSummery/CheckoutSummery";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelHandler = () => (this.props.history.goBack());

    checkoutContinueHandler = () => (this.props.history.replace('/checkout/contact-data'));

    render() {
        return (
            <Aux>
                <CheckoutSummery
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path + '/contact-data'}
                       render={(props) => (<ContactData
                           ingredients={this.state.ingredients}
                           price={this.state.totalPrice}
                           {...props}
                       />)}
                />
            </Aux>
        );
    };
}

export default Checkout;