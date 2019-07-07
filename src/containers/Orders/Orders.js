import React from 'react';
import axios from '../../axios-orders';
import Aux from "../../hoc/Auxiliary";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends React.Component {
    state = {
        order: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/order.json').then(
            res => {
                const orders = [];
                for (let key in res.data) {
                    orders.push({
                        ...res.data[key],
                        key: key
                    })
                }
                this.setState({order: orders, loading: false})
            }
        ).catch(err => this.setState({loading: false}))
    }

    render() {
        return (
            <Aux>
                {this.state.loading ? <Spinner/> : this.state.order.map(order => {
                    return (
                        <Order
                            key={order.key}
                            ingredients={order.ingredients}
                            price={order.price}
                        />
                    );
                })}
            </Aux>
        );
    }
}

export default withErrorHandler(Orders, axios);