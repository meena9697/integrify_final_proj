import express from 'express'

import {
  createProduct,
  updateProduct,
  deleteProduct,
  findAll,
  findByProduct,
  getSeedProduct,
} from '../controllers/makeupController'

const productRoute = express.Router()

// Every path we define here will get /api/v1/movies prefix
productRoute.get('/', findAll)
productRoute.get('/seedProduct', getSeedProduct)
productRoute.get('/:product_type', findByProduct)
productRoute.put('/:product_type', updateProduct)
productRoute.delete('/:product_type', deleteProduct)
productRoute.post('/', createProduct)

export default productRoute
