const { Buy, BuyItem } = require('../db')
const Stripe = require('stripe')

const { STRIPE_KEY } = process.env
const stripe = new Stripe(STRIPE_KEY)

const createBuy = async ({ idStripe, totalAmount, cart, userId }) => {
  try {
    // console.log('Este es el idStripe', idStripe)
    const payment = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: 'ARS',
      description: 'Prueba',
      payment_method: idStripe,
      confirm: true
    })
    console.log('Este es el payment', payment)
    if (!payment.hasOwnProperty('id')) throw new Error(payment.raw.message) //eslint-disable-line
    const newBuy = await Buy.create({
      idBack: payment.id,
      currency: payment.currency,
      paymentMethod: payment.payment_method_types.toString(),
      idFront: idStripe,
      totalAmount,
      userId
    })
    // console.log('Esta es la nueva compra', newBuy)
    cart?.map(async (p) => await createBuyItem(p.count, p.id, newBuy.id))
    await userBuylvlUp(userId)
    return newBuy
  } catch (error) {
    console.log(error, 'Error createBuy stripe')
    throw new Error(error.raw.message)
  }
}

module.exports = {
    createBuy
}