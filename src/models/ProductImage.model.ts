import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'

const ProductImage = dbConnection.define(
  'ProductImage',
  {
    productImageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    featuredImageID: {
      type: DataTypes.INTEGER,
    },
    featuredImage: {
      type: DataTypes.INTEGER,
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
  }
)

export default ProductImage
