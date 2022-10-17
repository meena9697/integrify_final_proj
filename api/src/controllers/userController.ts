import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

import userModel, { UserDoc } from '../models/userModel'
import UserService from '../services/userService'
import { JWT_SECRET } from '../util/secrets'
import { BadRequestError } from '../helpers/apiError'

// POST /users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserService.createUser(req.body)
    res.json()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// GET /users
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.getAllUsers())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const googleAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userGoogleData = req.user as UserDoc
    console.log(userGoogleData, "user data")
    const { email, firstname, lastname } = userGoogleData
    const token = jwt.sign(
      {
        email,
        firstname,
        lastname
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    res.json({ token, userGoogleData })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

