/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type productColorType = {
  hex_value: string
  colour_name: string
}

export type MakeupDoc = Document & {
  brand: string
  name: string
  product_colors: productColorType[]
  price: string
  image_link: string
  description: string
  product_type: string
  price_sign: string
}

const productSchema = new mongoose.Schema({
  hex_value: {
    type: String,
  },
  colour_name: {
    type: String,
  },
})

export const makeupSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: false,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
    required: false,
  },
  price_sign: {
    type: String,
  },
  image_link: {
    type: String,
  },
  description: {
    type: String,
    required: false,
    min: 100,
  },
  product_type: {
    type: String,
    required: false,
  },
  product_colors: [productSchema],
})

const makeupModel = mongoose.model<MakeupDoc>('products', makeupSchema)

export default makeupModel
