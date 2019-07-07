import React from 'react';
import css from './NavItem.css';
import {NavLink} from "react-router-dom";

const NavItem = (props) => (
    <li className={css.NavItem}>
        <NavLink
            exact={props.exact}
            to={props.link}
            activeClassName={css.active}
        >{props.children}</NavLink>
    </li>
);

export default NavItem;