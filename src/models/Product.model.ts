import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import Category from './Category.model'
import Specification from './Specification.model'
import ProductImage from './ProductImage.model'
import Document from './Documentation.model'

const Product = connection.define(
  'Product',
  {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specificationID: {
      type: DataTypes.INTEGER,
      references: {
        model: Specification,
        key: 'specificationID',
      },
    },
    productImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductImage,
        key: 'productImageID',
      },
    },
    categoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'categoryID',
      },
    },
    documentationID: {
      type: DataTypes.INTEGER,
      references: {
        model: Document,
        key: 'documentationID',
      },
    },
    productName: {
      type: DataTypes.STRING,
    },
    productDescription: {
      type: DataTypes.STRING,
    },
    productContent: {
      type: DataTypes.STRING,
    },
    productCode: {
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
    tableName: 'products',
    timestamps: true,
  },
)

export default Product
