import React from 'react';
import css from './Modal.css';
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <Auxiliary>
        <div className={css.Modal}
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}
        >{props.children}</div>
        <Backdrop show={props.show} click={props.clickBackdrop}/>
    </Auxiliary>
);

export default React.memo(Modal);