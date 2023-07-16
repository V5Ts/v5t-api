import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import FeaturedImage from './FeaturedImage.model'

const Category = dbConnection.define(
  'Category',
  {
    categoryID: {
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
    name: {
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
    tableName: 'categories',
    timestamps: true,
  },
)

export default Category
