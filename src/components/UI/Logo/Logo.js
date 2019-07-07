import React from 'react';
import css from './Logo.css';
import logo from '../../../assets/images/27.1 burger-logo.png.png';

const Logo = props => (
    <div className={css.Logo}>
        <img src={logo} alt={'MyBurger'}/>
    </div>
);

export default Logo;