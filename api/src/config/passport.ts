import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import dotenv from 'dotenv'

import userService from '../services/userService'

dotenv.config()

export const googleStrategy = new GoogleTokenStrategy(
  { clientID: process.env.GOOGLE_CLIENT_ID as string },
  async function (parsedToken: any, googleId: string, done: any) {
    console.log(parsedToken, 'parsedToken')
    const userPayload = {
      email: parsedToken.payload.email,
      firstname: parsedToken.payload.given_name,
      lastname: parsedToken.payload.family_name,
    }

    // create or find user by name

    const user = await userService.findOrCreate(userPayload)
    done(null, user)
  }
)
