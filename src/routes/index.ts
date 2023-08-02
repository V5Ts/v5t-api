import express from 'express'
import logging from '~/utils/logging'
import apiRoutes from './api'

const router = express.Router()

const NAMESPACE = '[routes/index.js]'

router.use('/api', apiRoutes)

router.use((req, res) => {
  res.status(404).end()
  res.send('<h1>Wrong Route!</h1>')
  logging.error(NAMESPACE, 'Wrong route with error: ' + res)
})

export default router
