import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import Product from './Product.model'
import StockInputStory from './StockInputStory.model'
import StockOutputStory from './StockOutputStory.model'

const StockStorage = dbConnection.define(
  'StockStorage',
  {
    storageID: {
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
    stockInputStoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: StockInputStory,
        key: 'stockInputStoryID',
      },
    },
    stockOutputStoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: StockOutputStory,
        key: 'stockOutputStoryID',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    maximumCapacity: {
      type: DataTypes.NUMBER,
    },
    totalItem: {
      type: DataTypes.NUMBER,
    },
    location: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'stock_storages',
    timestamps: true,
  },
)

export default StockStorage
