import jwt from 'jsonwebtoken'

import userModel, { UserDoc } from '../models/userModel'
import { JWT_SECRET } from '../util/secrets'

const createUser = async (user: UserDoc) => {
  const newData = await userModel.create(user)
  return await newData.save()
}

const getAllUsers = async (): Promise<UserDoc[]> => {
  return userModel.find().sort({ firstname: 1 })
}

const findOrCreate = async (payload: Partial<UserDoc>) => {
  try {
    const foundUser = await userModel.findOne({ email: payload.email })
    if (foundUser) {
      return foundUser
    } else {
      const newUser = {
        email: payload.email,
        firstname: payload.firstname,
        lastname: payload.lastname,
        loginWith: 'google',
      }
      const newCreatedUser = await userModel.create(newUser)
      await newCreatedUser.save()
      return newCreatedUser
    }
  } catch (error) {
    console.log(error)
  }
}

const findOrCreateViaRegister = async (user: UserDoc) => {
  try {
    const foundUser = await userModel.findOne({ email: user.email })
    if (foundUser) {
      const token = jwt.sign({ email: foundUser.email }, JWT_SECRET)
      return { foundUser, token }
    } else {
      const foundUser = await user.save()
      const token = jwt.sign({ email: foundUser.email }, JWT_SECRET)
      return { foundUser, token }
    }
  } catch (error) {
    console.log(error)
  }
}

const findUserByEmail = async (email: string) => {
  return userModel.findOne({ email: email })
}

export default {
  createUser,
  getAllUsers,
  findOrCreate,
  findOrCreateViaRegister,
  findUserByEmail,
}
