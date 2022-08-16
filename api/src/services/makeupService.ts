import makeupModel, { MakeupDoc, makeupSchema } from '../models/makeupModel'
import { NotFoundError } from '../helpers/apiError'

const createProd = async (makeup: MakeupDoc) => {
  const newData = await makeupModel.create(makeup)
  return await newData.save()
}

const findByProduct = async (product_type: string): Promise<MakeupDoc> => {
  const foundProduct = await makeupModel.findOne({product_type})

  if (!foundProduct) {
    throw new NotFoundError(`Product ${product_type} not found`)
  }

  return foundProduct
}

const findAll = async (): Promise<MakeupDoc[]> => {
  return makeupModel.find()
}

const update = async (
  product_type: string,
  update: Partial<MakeupDoc>
): Promise<MakeupDoc | null> => {
  const foundProduct = await makeupModel.findOneAndUpdate({product_type}, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${product_type} not found`)
  }

  return foundProduct
}

const deleteProduct = async (product_type: string): Promise<MakeupDoc | null> => {
  const foundMovie = makeupModel.findOneAndDelete({product_type})

  if (!foundMovie) {
    throw new NotFoundError(`Product ${product_type} not found`)
  }

  return foundMovie
}

export default {
  createProd,
  findByProduct,
  findAll,
  update,
  deleteProduct,
}
