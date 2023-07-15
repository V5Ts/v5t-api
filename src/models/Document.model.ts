import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import Category from './Category.model'
import Specification from './Specification.model'
import ProductImage from './ProductImage.model'
import DocType from './DocType.model'

const Document = dbConnection.define(
  'Document',
  {
    documentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    docTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: DocType,
        key: 'docTypeID',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.FLOAT,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'documents',
    timestamps: true,
  }
)

export default Document
