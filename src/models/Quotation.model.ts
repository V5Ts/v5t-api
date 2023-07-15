import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'

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
  }
)

export default Category
