import React, {Component} from 'react';
import Auxiliary from "./Auxiliary";
import Modal from "../components/UI/Modal/Modal";

const withErrorHandler = (WrappedEl, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        };

        errorConfiredHandler = () => (this.setState({error: null}));

        render() {
            return (
                <Auxiliary>
                    <Modal show={this.state.error} clickBackdrop={this.errorConfiredHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedEl {...this.props}/>
                </Auxiliary>
            );
        };
    };
};

export default withErrorHandler;