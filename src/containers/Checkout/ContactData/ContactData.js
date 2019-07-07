import React, {Component} from 'react';
import css from './ContactData.css';
import axios from '../../../axios-orders';
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validator: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            street: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validator: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            zipCode: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validator: {
                    required: true,
                    minLength: 6,
                    maxLength: 6
                },
                isValid: false,
                touched: false
            },
            country: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validator: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            email: {
                elType: 'input',
                elConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validator: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            deliveryType: {
                elType: 'select',
                elConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validator: {},
                isValid: true
            }
        },
        formIsValid: false,
        loading: false
    };

    checkValidity = (value, rule) => {
        let isValid = true;

        if(rule.required)
            isValid = value.trim() !== '' && isValid;

        if(rule.minLength)
            isValid = value.length >= rule.minLength && isValid;

        if(rule.maxLength)
            isValid = value.length <= rule.maxLength && isValid;

        return isValid;
    };

    inputChangeHandler = (event, identifier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedElement = {...updatedOrderForm[identifier]};
        updatedElement.value = event.target.value;
        updatedElement.isValid = this.checkValidity(updatedElement.value, updatedElement.validator);
        updatedElement.touched = true;
        updatedOrderForm[identifier] = updatedElement;

        let formIsValid = true;
        for (let input in updatedOrderForm)
            formIsValid = updatedOrderForm[input].isValid && formIsValid;

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    };

    orderSubmit = (event) => {
        event.preventDefault();

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        };
        const contactData = {};
        contactData.address = {};

        for (let key in this.state.orderForm) {
            if (key === 'street' || key === 'zipCode' || key === 'country') {
                contactData.address[key] = this.state.orderForm[key].value
            } else if (key === 'deliveryType') {
                order[key] = this.state.orderForm[key].value
            } else {
                contactData[key] = this.state.orderForm[key].value
            }
        }
        order.customer = contactData;

        this.setState({loading: true});

        axios.post('/order.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
            });
    };

    render() {
        const inputElements = [];
        for (let key in this.state.orderForm) {
            inputElements.push({id: key, config: this.state.orderForm[key]})
        }

        let form = <Spinner/>;
        if (this.state.loading === false) {
            form = (
                <form onSubmit={this.orderSubmit}>
                    {inputElements.map(inputElement =>
                        <Input
                            key={inputElement.id}
                            elType={inputElement.config.elType}
                            elConfig={inputElement.config.elConfig}
                            valid={inputElement.config.isValid}
                            shouldValidate={inputElement.config.validator}
                            touched={inputElement.config.touched}
                            value={inputElement.config.value}
                            change={(event) => this.inputChangeHandler(event, inputElement.id)}
                        />
                    )}
                    <Button buttonType={'Success'} disabled={!this.state.formIsValid}>ORDER</Button>
                </form>
            );
        }
        return (
            <div className={css.ContactData}>
                <h4>Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;