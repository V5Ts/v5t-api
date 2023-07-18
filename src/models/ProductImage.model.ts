import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import FeaturedImage from './FeaturedImage.model'

const ProductImage = connection.define(
  'ProductImage',
  {
    productImageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    featuredImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: FeaturedImage,
        key: 'featuredImageID',
      },
    },
    featuredImage: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'product_images',
    timestamps: true,
  },
)

export default ProductImage
