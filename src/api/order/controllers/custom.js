// path: ./src/api/restaurant/controllers/restaurant.js
const { createCoreController } = require('@strapi/strapi').factories;
const Razorpay = require('razorpay');
const crypto = require('crypto');

const https = require('https');
// const PaytmChecksum = require('paytmchecksum');
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    
    async checkout(ctx) {
        // @ts-ignore
        console.log(ctx.request.body);
        // @ts-ignore
        const kuchbhi = ctx.request.body;
        // @ts-ignore
        console.log(kuchbhi);
    
        const options = {
          amount: Number(100 * 100),
          currency: 'INR',
        };
    
        try {
          const order = await razorpay.orders.create(options);
    
          ctx.send({
            success: true,
            order,
          });
        } catch (error) {
          ctx.send({
            success: false,
            message: error.message,
          });
        }
      },

      async paymentVerification(ctx) {
        // @ts-ignore
        console.log(ctx.request.body);
        // @ts-ignore
        const kuchbhi = ctx.request.body;
        // @ts-ignore
        console.log(ctx.request.body,kuchbhi);
      //   const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    
      //   const expectedSignature = crypto
      //     .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      //     .update(body.toString())
      //     .digest('hex');
    
      //   const isAuthentic = expectedSignature === razorpay_signature;
    
      //   if (isAuthentic) {
      //     // Save payment details to the database
          // try {
          //   await Payment.create({
          //     razorpay_order_id,
          //     razorpay_payment_id,
          //     razorpay_signature,
          //   });
    
      //       ctx.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
      //     } catch (error) {
      //       ctx.send({
      //         success: false,
      //         message: error.message,
      //       });
      //     }
      //   } else {
      //     ctx.send({
      //       success: false,
      //     });
      //   }
       },

      async getRazorpayKey(ctx) {
        try {
          const key = process.env.RAZORPAY_KEY_ID;
          ctx.send({ key });
        } catch (error) {
          ctx.throw(500, 'Internal Server Error');
        }
      },

     async webHookRazorpay(ctx) {
       try{
        ctx.send('ok');
       } catch(error){
        ctx.throw(500,'internal server error');
       }
      
     }

}));