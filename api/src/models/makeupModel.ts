/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose from 'mongoose'

export type MakeupDoc = {
  id: string
  brand: number
  name: string
  product_colors: string[]
  price: string
  rating: number
  image_link: string
  description: string
  product_type: string
}

const productSchema = new mongoose.Schema({
  hex_value: {
    type: String,
  },
  colour_name: {
    type: String,
  },
})

const makeupSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  image_link: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    min: 100,
  },
  product_type: {
    type: String,
    required: true,
  },
  product_colors: [productSchema],
})

const makeupModel = mongoose.model('products', makeupSchema)

export default makeupModel
