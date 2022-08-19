import mongoose from 'mongoose'

export const orderSchema = new mongoose.Schema({
    address: {
        city: {
          type: String,
          required: false,
        },
        street: {
          type: String,
          required: false,
        },
        number: {
          type: Number,
          required: false,
        },
        zipcode: {
          type: String,
          required: false,
        },
      }
    })    

const orderModel = mongoose.model('orders', orderSchema)

export default orderModel
