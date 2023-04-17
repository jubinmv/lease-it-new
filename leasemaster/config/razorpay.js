import Razorpay from 'razorpay'
import axios from 'axios';
var instance = new Razorpay({ key_id: 'rzp_test_iJs9lNifWJnygM', key_secret: 'L62yDlfuWWbZ3LgVBq4njrTb' })

export function paymentUsingPaymentId(paymentId) {
  return instance.payments.fetch(paymentId)
}

// export async function createOrder(options) {
//   // var options = {
//   //   amount: 50000,  // amount in the smallest currency unit
//   //   currency: "INR",
//   //   receipt: "order_rcptid_11"
//   // };
//   try {
//    await instance.orders.create(options, function(err, order) {
//       return order
//     });
//   } catch (error) {
//     throw error
//   }

// }

export async function createOrder(options) {
  // var options = {
  //   amount: 50000,  // amount in the smallest currency unit
  //   currency: "INR",
  //   receipt: "order_rcptid_11"
  // };
  let token = 'rzp_test_iJs9lNifWJnygM:L62yDlfuWWbZ3LgVBq4njrTb'
  token = 'Basic ' + btoa(token)
  try {
    const response = await axios.post('https://api.razorpay.com/v1/orders', options, {
      headers: [
        {
          'Authorization': 'Basic cnpwX3Rlc3RfaUpzOWxOaWZXSm55Z006TDYyeURsZnVXV2JaM0xnVkJxNG5qclRi'
        }
      ]
    })
  } catch (error) {
    throw error
  }

}


