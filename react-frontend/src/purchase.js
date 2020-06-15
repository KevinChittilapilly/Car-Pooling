import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';


const onToken = (token) => {
  console.log(token);
};
//const {stripe, elements} = this.props

const Purchase = ({
 price, title, children, ...props
}) => (
  <StripeCheckout
    name="Car Pooling"
    description={title}
    token={onToken}
    amount={price*100}
    locale= 'auto'
    stripeKey={'pk_test_JCw7yalJ6qfeMptRw9At6tAj00gVIIOGzX'}
  >
    {children || <span {...props}>PURCHASE</span>}
  </StripeCheckout>
);
Purchase.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Purchase;