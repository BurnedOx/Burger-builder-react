import React from 'react';
import css from './SideDrawer.css';
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Sidedrawer = props => {
    const attachedCss = [css.SideDrawer, css.Close];

    if(props.show) {
        attachedCss[1] = css.Open;
    }

    return (
        <Auxiliary>
            <Backdrop show={props.show} click={props.close}/>
            <div className={attachedCss.join(' ')}>
                <div className={css.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Auxiliary>
    );
};

export default Sidedrawer;