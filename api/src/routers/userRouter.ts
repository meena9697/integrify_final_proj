import express from 'express'
import passport from 'passport'
import { createUser, getAllUsers, googleAuthenticate } from '../controllers/userController'

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
  
  export default userRoute
