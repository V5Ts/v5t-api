import express from 'express'

import category from './Category.route'

const router = express.Router()

router.use('/categories', category)
// router.use('/products', productRoutes)
// router.use('/tags', tagRoutes)

export default router
