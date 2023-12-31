import { Request, Response } from 'express'
import { CategoryModel } from '~/models'
import Category from '~/models/Category.model'
import logging from '~/utils/logging'
import { responser } from '~/utils/network'

const NAMESPACE = '[controller/categories]'
const modelName = 'Categories'

// Get by id
export const getByID = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const category = await Category.findByPk(id)

    if (!category) {
      return responser(res.status(404), {}, `${modelName} not found!`)
    }

    logging.info(NAMESPACE, `${modelName} found successfully!`)
    return responser(
      res.status(200),
      category,
      `${modelName} found successfully!`,
    )
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}

// Get all
export const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll()

    logging.info(NAMESPACE, `Get all ${modelName} successfully`)
    return responser(
      res.status(200),
      categories,
      `Get all ${modelName} successfully!`,
    )
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}

// Create new
export const createNew = async (req: Request, res: Response) => {
  const body = req.body

  const json = {
    featured_image_id: body.featuredImageID,
    name: body.name,
    order_number: body.orderNumber,
    slug: body.slug,
  }

  try {
    const item = await CategoryModel.create(json)
    logging.info(NAMESPACE, `${modelName} created successfully!`)
    return responser(res.status(201), item)
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
    const category = await Category.findByPk(id)

    if (!category) {
      return responser(res.status(404), {}, `${modelName} not found!`)
    }

    const updatedItem = await category.update(json)
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
    const category = await Category.findByPk(id)

    if (!category) {
      return responser(res.status(404), {}, `${modelName} not found!`)
    }

    await category.destroy()
    logging.info(NAMESPACE, `${modelName} deleted successfully!`)
    return responser(res.status(200), {}, `${modelName} deleted successfully!`)
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}
