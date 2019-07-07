import React from 'react';
import css from './Order.css';
import Aux from "../../hoc/Auxiliary";
import withClass from "../../hoc/withClass";

const Order = props => {
    const ingredients = [];

    for (let i in props.ingredients) {
        ingredients.push({name: i, amount: props.ingredients[i]})
    }

    const orderIngredients = ingredients.map(i => (
        <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={i.name}
        >{i.name} ({i.amount})</span>
    ));

    return (
        <Aux>
            <p>Ingredients: {orderIngredients}</p>
            <p>Price: <strong>USD {(+props.price).toFixed(2)}</strong></p>
        </Aux>
    );
};

export default withClass(Order, css.Order)