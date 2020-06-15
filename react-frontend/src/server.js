// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_4Zk3mc0WxEXv5iEKAFqOrnwy00bXI1AiPQ');

(async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'inr',
  });
})();