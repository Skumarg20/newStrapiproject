// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/orders/pretransaction',
      handler: 'custom.checkout', 
    },
    {
      method: 'POST',
      path: '/orders/posttransaction',
      handler: 'custom.paymentVerification', 
    },
    {
      method: 'GET',
      path: '/orders/gettransactionkey',
      handler: 'custom.getRazorpayKey', 
    },
    {
      method: 'GET',
      path: '/orders/getwebhooktry',
      handler: 'custom.webHookRazorpay', 
    },
  ],
};