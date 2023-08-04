import express from 'express'
import * as controller from '~/controllers/featured-image.controller'
import upload from '~/middlewares/upload'

const router = express.Router()

// Cấu hình multer để upload hình ảnh

router.get('/:id', controller.getByID)
router.get('/', controller.getAll)
router.post('/', upload.single('image'), controller.createNew)
router.put('/:id', controller.updateByID)
router.delete('/:id', controller.deleteByID)

export default router
