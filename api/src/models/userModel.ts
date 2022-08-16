import mongoose from 'mongoose'

export type UserDoc = {
  name: {
    firstname: string
    lastname: string
  }
  username: string
  email: string
  password: string
  address: {
    city: string
    street: string
    number: number
    zipcode: string
  }
  phone: number
  iasAdmin: boolean
}
const userSchema = new mongoose.Schema({
  name: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  username: {
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
