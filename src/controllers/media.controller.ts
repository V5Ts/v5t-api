import { UploadApiResponse } from 'cloudinary'
import { Request, Response } from 'express'
import logging from '~/utils/logging'
import { responser } from '~/utils/network'

const NAMESPACE = '[controller/media]'
const modelName = 'Media'

// Upload image
export const uploadImage = async (req: Request, res: Response) => {
  try {
    // Đường dẫn đến hình ảnh đã upload trên Cloudinary
    const result: UploadApiResponse | any = req.file

    // Xử lý hình ảnh và lưu vào cơ sở dữ liệu (nếu cần)

    // Trả về đường dẫn hình ảnh đã upload trên Cloudinary

    logging.info(NAMESPACE, `${modelName} created successfully!`)
    return responser(res.status(200), result)
  } catch (error) {
    return responser(res.status(400), {}, (error as Error).message)
  }
}
