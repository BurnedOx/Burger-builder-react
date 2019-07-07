import React from 'react';
import css from './Toolbar.css';
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggler from "./DrawerToggler/DrawerToggler";

const Toolbar = props => (
    <header className={css.Toolbar}>
        <DrawerToggler toggle={props.clickToggle}/>
        <div className={css.Logo}>
            <Logo/>
        </div>
        <nav className={css.DesktopOnly}>
            <NavItems/>
        </nav>
    </header>
);

export default Toolbar;