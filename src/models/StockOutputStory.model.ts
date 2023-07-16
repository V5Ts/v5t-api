import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import Product from './Product.model'
import User from './User.model'

const StockOutputStory = dbConnection.define(
  'StockOutputStory',
  {
    stockOutputStoryID: {
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
    quantity: {
      type: DataTypes.NUMBER,
    },
    stockOutDate: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'stock_output_stories',
    timestamps: true,
  },
)

export default StockOutputStory
