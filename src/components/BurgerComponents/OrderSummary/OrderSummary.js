import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
    const listItems = Object.keys(props.ingredients).map(
        igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} ${(props.itemPrice[igKey]*props.ingredients[igKey]).toFixed(2)}
                </li>
            )
        }
    );

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following items:</p>
            <ul>
                {listItems}
            </ul>
            <p>Total Price: ${props.price.toFixed(2)}</p>
            <p>Place order?</p>
            <Button buttonType={'Danger'} click={props.cancelOrder}>CANCEL</Button>
            <Button buttonType={'Success'} click={props.placeOrder}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default OrderSummary;