import React from 'react';
import css from './BuildControls.css';
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = props => (
    <Aux>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>
            <BuildControl
                key={ctrl.label}
                Label={ctrl.label}
                add={() => props.add(ctrl.type)}
                remove={() => props.remove(ctrl.type)}
                disabledInfo={props.disabledInfo[ctrl.type]}
                itemPrice={props.itemPrices[ctrl.type]}
            />)}
            <button className={css.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.order}
            >Order Now</button>
    </Aux>
);

export default withClass(BuildControls, css.BuildControls);