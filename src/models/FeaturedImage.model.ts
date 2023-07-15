import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'

const FeaturedImage = dbConnection.define(
  'FeaturedImage',
  {
    featuredImageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    tableName: 'featured_images',
    timestamps: true,
  }
)

export default FeaturedImage
