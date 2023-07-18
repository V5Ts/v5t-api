import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import Product from './Product.model'
import User from './User.model'

const Quotation = connection.define(
  'Quotation',
  {
    quotationID: {
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
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'userID',
      },
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'quotation',
    timestamps: true,
  },
)

export default Quotation
