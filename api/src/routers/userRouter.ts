import express from 'express'

import { createUser, findAllUsers } from '../controllers/userController'

const userRoute = express.Router()

// Every path we define here will get /api/v1/users prefix
userRoute.get('/', findAllUsers)
userRoute.post('/', createUser)

export default userRoute
