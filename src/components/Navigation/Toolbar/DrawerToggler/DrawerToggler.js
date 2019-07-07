import React from 'react';
import css from './DrawerToggler.css';

const DrawerToggler = props => (
    <div className={css.DrawerToggler} onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggler;