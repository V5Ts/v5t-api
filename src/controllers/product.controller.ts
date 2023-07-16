import { NextFunction, Request, Response } from 'express'
import { Connect, Query } from '~/config/database'
import logging from '~/utils/logging'

const NAMESPACE = 'Products'

const createNew = async (req: Request, res: Response, next: NextFunction) => {
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

  //   const product = await Products.create(body)
  //   res.status(200).send(product)
  //   console.log(product)
}

export { createNew }
