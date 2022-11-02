import express from 'express'
import passport from 'passport'
import {
  createUser,
  getAllUsers,
  googleAuthenticate,
  findOrCreateViaRegister,
  findUserByEmail
} from '../controllers/userController'

const userRoute = express.Router()

// Every path we define here will get /api/v1/users prefix
userRoute.post('/', createUser)
userRoute.post(
  '/google-authenticate',
  passport.authenticate('google-id-token', { session: false }),
  googleAuthenticate
)
userRoute.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  // adminCheck,
  getAllUsers
)
userRoute.post('/register', findOrCreateViaRegister)
userRoute.post('/login', findUserByEmail)

export default userRoute
