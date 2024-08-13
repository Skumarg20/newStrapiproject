'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');

// moodule.exports={
//     async create(ctx){
//         const {product}=ctx.request.body
//         if(!product){
//             return ctx.throw(400,'please sepcify a product');
            
//         }
//         const realproduct=await strapi.services.product.findOne({id:product.id});
//         if(!realproduct){
//             return ctx.throw(404,'No product with such id');
//         }
//         const {user}=ctx.state
//         const BASE_URL=ctx.request.headers.origin || 'http://localhost:3000'
         
//          const session= await stripe.checkout.sessions.create({
//    payment_method_types:['card'],
//    customer_email:user.email,
//    mode:'payment',
//     success_url:`${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url:BASE_URL,
//       line_items:[
//         {
//             price_data:{
//                 currency:'usd',
//                 product_data:{
//                     name:realproduct.name
//                 },
//                 unit_amount:(realproduct.price),   
//             },
//             quantity:1
//         }
//       ]
//          })

//          const newOrder=await strapi.services.order.create({
//             user:user.id,
//             product:realproduct.id,
//             total:realproduct.price,
//             status:'unpaid',
//             checkout_session:session.id
//          })
//          return {id:session.id}

//     }
// }


