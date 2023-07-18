import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'

const FeaturedImage = connection.define(
  'FeaturedImage',
  {
    featuredImageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    tableName: 'featured_images',
    timestamps: true,
  },
)

export default FeaturedImage
