const Razorpay = require('razorpay');

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = {
  async createOrder(ctx) {
    try {
      const { amount, currency = 'INR', receipt } = ctx.request.body;

      // Create an order
      const order = await razorpay.orders.create({
        amount,
        currency,
        receipt,
      });

      ctx.send({ order });
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },

  async capturePayment(ctx) {
    try {
      const { paymentId, amount, currency = 'INR' } = ctx.request.body;

      // Capture the payment
      const capture = razorpay.payments.capture(paymentId, amount, 
          currency);

      ctx.send({ capture });
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
};
