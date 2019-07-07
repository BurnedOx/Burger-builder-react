import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from "../../components/BurgerComponents/Burger/Burger";
import BuildControls from "../../components/BurgerComponents/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BurgerComponents/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('/ingredients.json').then(res => {
            this.setState({ingredients: res.data})
        }).catch(error => {
            this.setState({error: error})
        })
    }

    ingredientAddHandler = type => {
        const count = this.state.ingredients[type] + 1;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = count;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        this.updatePurchasableState(updatedIngredients);
    };

    ingredientRemoveHandler = type => {
        if(this.state.ingredients[type] !== 0) {
            const count = this.state.ingredients[type] - 1;
            const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = count;

            this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
            this.updatePurchasableState(updatedIngredients);
        }
    };

    updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients).map(
            igKey => ingredients[igKey]
        ).reduce(
            (sum, el) => sum + el, 0
        );

        this.setState({purchasable: sum > 0});
    };

    purchasingHandler = () => this.setState({purchasing: true});

    purchaseCancelHandler = () => this.setState({purchasing: false});

    purchaseHandler = () => {
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let OrderSummery = <OrderSummary ingredients={this.state.ingredients}
                                         itemPrice={INGREDIENT_PRICES}
                                         price={this.state.totalPrice}
                                         cancelOrder={this.purchaseCancelHandler}
                                         placeOrder={this.purchaseHandler}
        />;
        if (this.state.loading) {
            OrderSummery = <Spinner/>;
        }

        return (
            this.state.ingredients ?
            <Aux>
                <Modal show={this.state.purchasing} clickBackdrop={this.purchaseCancelHandler}>
                    {OrderSummery}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.totalPrice}
                    add={this.ingredientAddHandler}
                    remove={this.ingredientRemoveHandler}
                    disabledInfo={disabledInfo}
                    purchasable={this.state.purchasable}
                    order={this.purchasingHandler}
                    itemPrices={INGREDIENT_PRICES}
                />
            </Aux> : this.state.error ? <p>Burger can't be loaded!</p> : <Spinner/>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);