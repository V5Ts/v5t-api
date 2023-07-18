import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import Product from './Product.model'

const ProjectItem = connection.define(
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
