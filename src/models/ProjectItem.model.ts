import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import Product from './Product.model'

const ProjectItem = dbConnection.define(
  'ProjectItem',
  {
    projectItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productID: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'productID',
      },
    },
    quantity: {
      type: DataTypes.NUMBER,
    },
    projectStatus: {
      type: DataTypes.INTEGER,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'project_items',
    timestamps: true,
  },
)

export default ProjectItem
