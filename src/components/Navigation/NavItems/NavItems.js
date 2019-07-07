import React from 'react';
import css from './NavItems.css';
import NavItem from "./NavItem/NavItem";

const NavItems = () => (
    <ul className={css.NavItems}>
        <NavItem link={'/'} exact>Burger Builder</NavItem>
        <NavItem link={'/orders'}>Orders</NavItem>
    </ul>
);

export default NavItems;