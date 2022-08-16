import { Request, Response, NextFunction } from 'express'

import MakeupService from '../services/makeupService'
import { BadRequestError } from '../helpers/apiError'

// POST /makeupProduct
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await MakeupService.createProd(req.body)
    res.json()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /makeupProduct/:product_type
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const product_type = req.params.product_type
    const updatedProduct = await MakeupService.update(product_type, update)
    res.json(updatedProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /makeupProduct/:product_type
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await MakeupService.deleteProduct(req.params.product_type)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /makeupProduct/:product_type
export const findByProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await MakeupService.findByProduct(req.params.product_type))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /makeupProduct
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await MakeupService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
