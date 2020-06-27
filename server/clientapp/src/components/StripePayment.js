import React, { Component } from 'react';
import ReactStripeCheckout from 'react-stripe-checkout';//'ReactStripeCheckout' is a component, an object, a class.

class StripePayment extends Component {
    render() {
        return ( //return a single component 'ReactStripeCheckout'.
            <ReactStripeCheckout
                amount={500} //cents $5
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default StripePayment;