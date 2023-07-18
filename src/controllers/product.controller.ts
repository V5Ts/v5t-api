import { Request, Response } from 'express'
import Product from '~/models/Product.model'
import logging from '~/utils/logging'

const NAMESPACE = 'Products'

const createNew = async (req: Request, res: Response) => {
  const body = {
    categoryID: req.body.categoryID,
    documentID: req.body.documentID,
    productName: req.body.name,
    productDescription: req.body.description,
    productContent: req.body.content,
    productCode: req.body.code,
    orderNumber: req.body.orderNumber,
    slug: req.body.slug,
  }

  const product = await Product.create(body)
  res.status(200).send(product)
  logging.info(NAMESPACE, 'Product created successfully')
}

export { createNew }
