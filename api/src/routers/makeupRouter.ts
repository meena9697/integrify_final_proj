import express from 'express'

import {
  createMakeup,
  // findById,
  // deleteMovie,
  // findAll,
  // updateMovie,
} from '../controllers/makeupController'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
// router.get('/', findAll)
// router.get('/:movieId', findById)
// router.put('/:movieId', updateMovie)
// router.delete('/:movieId', deleteMovie)
router.post('/', createMakeup)

export default router
