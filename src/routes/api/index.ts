import express from 'express'

import category from './category.route'
import featuredImage from './featured-image.route'

const router = express.Router()

router.use('/categories', category)
router.use('/image', featuredImage)
// router.use('/products', productRoutes)
// router.use('/tags', tagRoutes)

export default router
