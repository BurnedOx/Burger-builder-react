import React, {Component} from 'react';
import css from './Layout.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSidedrawer: false
    };

    toggleSidedrawer = () => this.setState((prevState) => ({showSidedrawer: !prevState.showSidedrawer}));

    closeSidedrawer = () => this.setState({showSidedrawer: false});

    render() {
        return (
            <Aux>
                <Toolbar clickToggle={this.toggleSidedrawer}/>
                <Sidedrawer
                    close={this.closeSidedrawer}
                    show={this.state.showSidedrawer}
                />
                <main className={css.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;