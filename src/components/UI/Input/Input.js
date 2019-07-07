import React from 'react';
import css from './Input.css';
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

const Input = props => {
    let inputEl = null;
    const inputCss = [css.InputEl];
    
    if (!props.valid && props.shouldValidate && props.touched)
        inputCss.push(css.Invalid);

    switch (props.elType) {
        case ('input'):
            inputEl = <input className={inputCss.join(' ')} {...props.elConfig} value={props.value} onChange={props.change} />;
            break;
        case ('textarea'):
            inputEl = <textarea className={inputCss.join(' ')} {...props.elConfig} value={props.value} onChange={props.change} />;
            break;
        case ('select'):
            inputEl = <select className={inputCss.join(' ')} value={props.value} onChange={props.change} >
                {props.elConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>;
            break;
        default:
            inputEl = <input className={inputCss.join(' ')} {...props.elConfig} value={props.value} />
    }

    return (
        <Aux>
            <label className={css.Label}>{props.label}</label>
            {inputEl}
        </Aux>
    );
};

export default withClass(Input, css.Input);