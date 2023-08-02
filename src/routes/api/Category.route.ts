import express from 'express'
import * as controller from '~/controllers/category.controller'

const router = express.Router()

router.post('/', controller.createNew)

export default router
