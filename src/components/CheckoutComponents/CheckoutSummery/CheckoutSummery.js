import React from 'react';
import css from './CheckoutSummery.css';
import Aux from "../../../hoc/Auxiliary";
import Burger from "../../BurgerComponents/Burger/Burger";
import Button from "../../UI/Button/Button";
import withClass from "../../../hoc/withClass";

const CheckoutSummery = props => {
    return (
        <Aux>
            <h1>We hope it tastes well!!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button buttonType={'Danger'} click={props.checkoutCancel}>CANCEL</Button>
            <Button buttonType={'Success'} click={props.checkoutContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default withClass(CheckoutSummery, css.CheckoutSummery);