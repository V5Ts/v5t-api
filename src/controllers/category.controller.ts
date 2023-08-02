import { Request, Response } from 'express'
import Category from '~/models/Category.model'
import logging from '~/utils/logging'

const NAMESPACE = 'CONTROLLER - Categories'

const createNew = async (req: Request, res: Response) => {
  const body = {
    featuredImageID: req.body.featuredImageID,
    name: req.body.name,
    orderNumber: req.body.orderNumber,
    slug: req.body.slug,
  }

  await Category.create(body)
    .then((category) => {
      res.status(200).json(category)
      logging.info(NAMESPACE, 'Category created successfully')
    })
    .catch((err) => {
      res.status(400).json(err.message)
      logging.error(NAMESPACE, err.message)
    })
}

export { createNew }
