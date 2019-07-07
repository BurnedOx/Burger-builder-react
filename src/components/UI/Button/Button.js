import React from 'react';
import css from './Button.css'

const Button = props => (
    <button
        className={[css.Button, css[props.buttonType]].join(' ')}
        onClick={props.click}
        disabled={props.disabled}
    >{props.children}</button>
);

export default Button;