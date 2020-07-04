import React, { Component } from 'react';
import ReactStripeCheckout from 'react-stripe-checkout';//'ReactStripeCheckout' is a component, an object, a class.
import { connect } from 'react-redux';
import * as actions from '../actions';


class StripePayment extends Component {
    render() {
        return ( //return a single component 'ReactStripeCheckout'.
            <ReactStripeCheckout
                name="ClearFeedback"
                description="5 credits for 5 surveys"
                amount={500} //cents $5
                token={token => this.props.sendTokenToBackEnd(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credit</button>
            </ReactStripeCheckout>
        );
    }
}

export default connect(null, actions)(StripePayment);