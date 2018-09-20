import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from './../../UI/Button/Button';

class OrderSummary extends Component {

    // This could be a functional component. We made it class to check componentWillUpdate() to check the performance improvement

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => {
                return (
                    <li key={ingKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {ingKey}
                        </span>: {this.props.ingredients[ingKey]}
                    </li>
                );
            })

        return (
            <Aux>
                <h3>Your order:</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout, Siddarth?</p>
                <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCLE</Button>
                <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    };
}

export default OrderSummary;