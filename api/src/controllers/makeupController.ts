import { Request, Response, NextFunction } from 'express'

// import makeupModel from '../models/Makeup'
import MakeupService from '../services/makeupService'
import { BadRequestError } from '../helpers/apiError'

// POST /movies
export const createMakeup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // try {
  //   const {id,
  //     brand,
  //     name,
  //     product_colors,
  //     price,
  //     rating,
  //     image_link,
  //     description,
  //     product_type,
  //   } = req.body

  //   const makeup = new Makeup({
  //     id,
  //     brand,
  //     name,
  //     product_colors,
  //     price,
  //     rating,
  //     image_link,
  //     description,
  //     product_type,
  //   })

  try {
    await MakeupService.createProduct(req.body)
    res.json()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /movies/:movieId
// export const updateMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const update = req.body
//     const movieId = req.params.movieId
//     const updatedMovie = await MovieService.update(movieId, update)
//     res.json(updatedMovie)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // DELETE /movies/:movieId
// export const deleteMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await MovieService.deleteMovie(req.params.movieId)
//     res.status(204).end()
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET /movies/:movieId
// export const findById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await MovieService.findById(req.params.movieId))
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET /movies
// export const findAll = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await MovieService.findAll())
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }
