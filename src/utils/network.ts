import { Response } from 'express'

const responser = (res: Response, object?: any, message?: string): Response => {
  return res.status(res.statusCode).json({
    success: res.statusCode === 200 || res.statusCode === 201,
    item: object,
    message: message || res.statusMessage,
  })
}

export { responser }
