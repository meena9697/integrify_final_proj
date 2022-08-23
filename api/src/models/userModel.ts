import mongoose from 'mongoose'

export type UserDoc = {
    firstname: string
    lastname: string
  email: string
  password: string
  address: {
    city: string
    street: string
    number: number
    zipcode: string
  }
  phone: number
  isAdmin: boolean
}
const userSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
})

const userModel = mongoose.model('users', userSchema)

export default userModel
