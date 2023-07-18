import dotenv from 'dotenv'
import express, { Express, NextFunction, Request, Response } from 'express'
import keys from './utils/keys'
import logging from './utils/logging'
import { ProductRoutes } from './routes'

// Configuration
dotenv.config()

const NAMESPACE = 'Server'
const router: Express = express()

/** Log the request */
router.use((req: Request, res: Response, next: NextFunction) => {
  /** Log the req */
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`,
  )

  res.on('finish', () => {
    /** Log the res */
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`,
    )
  })

  next()
})

/** Parse the body of the request */
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: `Welcome to the cookbook API! \n Endpoints available at ${
      (keys.server.host, keys.server.port)
    }`,
  })
})

/** Rules of our API */
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }

  next()
})

/** Routes go here */
router.use('/product', ProductRoutes)

/** Error handling */
router.use((req, res) => {
  const error = new Error('Not found')

  res.status(404).json({
    message: error.message,
  })
})

try {
  router.listen(keys.server.port, () =>
    logging.info(
      NAMESPACE,
      `⚡️ Server is running on ${keys.server.host}:${keys.server.port}`,
    ),
  )
} catch (error) {
  logging.error(
    NAMESPACE,
    `Error occurred: ${keys.server.host}:${keys.server.port}`,
  )
}
