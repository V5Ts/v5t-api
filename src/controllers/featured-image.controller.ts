import { Request, Response } from 'express'
import path from 'path'
import FeaturedImageModel from '~/models/FeaturedImage.model'
import { GoogleDriveService } from '~/services/googleDriveService'
import keys from '~/utils/keys'
import logging from '~/utils/logging'
import { responser } from '~/utils/network'
import fs from 'fs'

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
  const result: any = req.file
  const { orderNumber } = req.body

  try {
    const item = await FeaturedImageModel.create({
      featured_image: result.path,
      thumbnail: result.path,
      order_number: orderNumber,
      slug: result.filename,
    })

    logging.info(NAMESPACE, `${modelName} created successfully!`)
    return responser(res.status(201), item)
  } catch (error) {
    return responser(res.status(400), {}, (error as Error).message)
  }
}

// Create new
export const uploadImage = async (req: Request, res: Response) => {
  const folderName = 'Featured Images'

  try {
    const finalPath = path.resolve(__dirname, 'public/IMG_1203.png')

    if (!fs.existsSync(finalPath)) {
      throw new Error('File not found!')
    }

    const googleDriveService = new GoogleDriveService(
      keys.googleDrive.clientId,
      keys.googleDrive.clientSecret,
      keys.googleDrive.redirectURL,
      keys.googleDrive.refreshToken,
    )

    let folder = await googleDriveService
      .searchFolder(folderName)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!folder) {
      folder = await googleDriveService.createFolder(folderName)
    }

    // .saveFile(
    //   req.file?.originalname || req.file?.filename || '',
    //   req.file?.path || '',
    //   req.file?.mimetype || '',
    //   folder.id,
    // )
    await googleDriveService
      .saveFile('SpaceX', finalPath, 'image/jpg', folder.id)
      .catch((error: Error) => {
        console.error(error)
      })

    // const item = await FeaturedImageModel.create({
    //   featured_image: result.path,
    //   thumbnail: result.path,
    //   order_number: orderNumber,
    //   slug: result.filename,
    // })

    logging.info(NAMESPACE, `${modelName} created successfully!`)
    return responser(res.status(201))
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
