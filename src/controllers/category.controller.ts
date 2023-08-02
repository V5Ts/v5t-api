import { Request, Response } from 'express'
import Category from '~/models/Category.model'
import logging from '~/utils/logging'
import { responser } from '~/utils/network'

const NAMESPACE = 'CONTROLLER - Categories'

// Get by id
export const getByID = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const category = await Category.findByPk(id)

    if (!category) {
      return responser(res.status(404), {}, 'Category not found!')
    }

    logging.info(NAMESPACE, 'Category found successfully')
    return responser(res.status(200), category, 'Category found successfully')
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}

// Get all
export const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll()

    logging.info(NAMESPACE, 'Get all successfully')
    return responser(res.status(200), categories, 'Get all successfully')
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
    const item = await Category.create(json)
    logging.info(NAMESPACE, 'Category created successfully')
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
      return responser(res.status(404), {}, 'Category not found!')
    }

    const updatedItem = await category.update(json)
    logging.info(NAMESPACE, 'Category updated successfully')
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
      return responser(res.status(404), {}, 'Category not found!')
    }

    await category.destroy()
    logging.info(NAMESPACE, 'Category deleted successfully')
    return responser(res.status(200), {}, 'Category deleted successfully')
  } catch (error) {
    return responser(res.status(500), {}, (error as Error).message)
  }
}
