import userModel, { UserDoc } from '../models/userModel'

const createUser = async (user: UserDoc) => {
  const newData = await userModel.create(user)
  return await newData.save()
}

const findAllUsers = async (): Promise<UserDoc[]> => {
  return userModel.find()
}

export default {
  createUser,
  findAllUsers,
}
