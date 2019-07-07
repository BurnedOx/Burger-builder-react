import React from 'react';
import css from './BuildControl.css';
import Aux from "../../../../hoc/Auxiliary";
import withClass from "../../../../hoc/withClass";

const BuildControl = props => (
    <Aux>
        <div className={css.Label}>{props.Label} (${props.itemPrice})</div>
        <button className={css.Less} onClick={props.remove} disabled={props.disabledInfo}>Less</button>
        <button className={css.More} onClick={props.add}>More</button>
    </Aux>
);

export default withClass(BuildControl, css.BuildControl)