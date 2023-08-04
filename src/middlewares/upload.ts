import multer, { Multer } from 'multer'
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import keys from '~/utils/keys'
import { Request } from 'express'

cloudinary.config({
  cloud_name: keys.cloudinary.cloudName,
  api_key: keys.cloudinary.apiKey,
  api_secret: keys.cloudinary.apiSecret,
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req: Request, file: Express.Multer.File) => {
    // async code using `req` and `file`
    // ...
    return {
      folder: 'public/images',
      formats: ['jpg', 'png'],
      public_id: `${file.originalname}`,
      filename: `${file.filename}`,
      metadata: {
        description: req.body.description,
      },
    }
  },
})

const upload: Multer = multer({ storage: storage })

export default upload
