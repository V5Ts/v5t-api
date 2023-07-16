import express from 'express'
import * as controller from '~/controllers/product.controller'

const router = express.Router()

router.post('/', controller.createNew)

export = router
