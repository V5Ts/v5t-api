import { UploadApiResponse } from 'cloudinary'
import { Request, Response } from 'express'
import FeaturedImageModel from '~/models/FeaturedImage.model'
import logging from '~/utils/logging'
import { responser } from '~/utils/network'

const NAMESPACE = '[controller/featured-image]'
const modelName = 'FeaturedImage'

// Get by id
export const getByID = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const featuredImage = await FeaturedImageModel.findByPk(id)

    if (!featuredImage) {
      return responser(res.status(404), {}, `${modelName} not found!`)
    }

    logging.info(NAMESPACE, `${modelName} found successfully!`)
    return responser(
      res.status(200),
      featuredImage,
      `${modelName} found successfully!`,
    )
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}

// Get all
export const getAll = async (req: Request, res: Response) => {
  try {
    const featuredImages = await FeaturedImageModel.findAll()

    logging.info(NAMESPACE, `Get all ${modelName} successfully`)
    return responser(
      res.status(200),
      featuredImages,
      `Get all ${modelName} successfully!`,
    )
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}

// Create new
export const createNew = async (req: Request, res: Response) => {
  const result: UploadApiResponse | any = req.file

  try {
    logging.info(NAMESPACE, `${modelName} created successfully!`)
    return responser(res.status(201), result)
  } catch (error) {
    return responser(res.status(400), {}, (error as Error).message)
  }
}

// Update
export const updateByID = async (req: Request, res: Response) => {
  const { id } = req.params
  const body = req.body

  const json = {
    featured_image_id: body.featuredImageID,
    name: body.name,
    order_number: body.orderNumber,
    slug: body.slug,
  }

  try {
    const featuredImage = await FeaturedImageModel.findByPk(id)

    if (!featuredImage) {
      return responser(res.status(404), {}, `${modelName} not found!`)
    }

    const updatedItem = await featuredImage.update(json)
    logging.info(NAMESPACE, `${modelName} updated successfully!`)
    return responser(res.status(200), updatedItem)
  } catch (error) {
    return responser(res.status(400), {}, (error as Error).message)
  }
}

// Delete
export const deleteByID = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const featuredImage = await FeaturedImageModel.findByPk(id)

    if (!featuredImage) {
      return responser(res.status(404), {}, `${modelName} not found!`)
    }

    await featuredImage.destroy()
    logging.info(NAMESPACE, `${modelName} deleted successfully!`)
    return responser(res.status(200), {}, `${modelName} deleted successfully!`)
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}
