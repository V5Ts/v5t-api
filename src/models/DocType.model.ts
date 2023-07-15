import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import Category from './Category.model'
import Specification from './Specification.model'
import ProductImage from './ProductImage.model'

const DocType = dbConnection.define(
  'DocType',
  {
    docTypeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
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
    tableName: 'doc_types',
    timestamps: true,
  }
)

export default DocType
