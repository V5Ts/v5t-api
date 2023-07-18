import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import Product from './Product.model'
import User from './User.model'

const StockInputStory = connection.define(
  'StockInputStory',
  {
    stockInputStoryID: {
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
    stockInDate: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'stock_input_stories',
    timestamps: true,
  },
)

export default StockInputStory
