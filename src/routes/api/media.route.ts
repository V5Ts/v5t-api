import express from 'express'
import * as controller from '~/controllers/media.controller'
import upload from '~/middlewares/upload'

const router = express.Router()

export default {
  image: router.post('/upload', upload.single('image'), controller.uploadImage),
}
