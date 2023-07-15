import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import Category from './Category.model'
import Specification from './Specification.model'
import ProductImage from './ProductImage.model'

const Product = dbConnection.define(
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
    documentID: {
      type: DataTypes.INTEGER,
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
  }
)

export default Product
