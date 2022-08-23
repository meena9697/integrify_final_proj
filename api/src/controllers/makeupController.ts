import { Request, Response, NextFunction } from 'express'

import MakeupService from '../services/makeupService'
import { BadRequestError } from '../helpers/apiError'
import dataform from '../../data.json'
import products from '../models/makeupModel'
import { productColorType } from '../models/makeupModel'

// get seed products
export const getSeedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    dataform.forEach(async (product) => {
      const seedProduct = new products({
        brand: product.brand,
        name: product.name,
        price: Number(product.price),
        image_link: product.image_link,
        product_type: product.product_type,
        description: product.description,
        price_sign: product.price_sign,
      //   variant: product.product_colors.map((item: productColorType) => {
      //     return {
      //       hexValue: item.hex_value,
      //       colourName: item.colour_name,
      //     }
      //   }),
      })
      res.json(await MakeupService.createProd(seedProduct))
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
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
