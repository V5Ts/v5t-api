import { DataTypes, Model, Optional } from 'sequelize'
import { StockStorage } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import ProductModel from './Product.model'
import StockOutputStoryModel from './StockOutputStory.model'
import StockInputStoryModel from './StockInputStory.model'

interface StockStorageCreationAttributes
  extends Optional<StockStorage, 'storageID'> {}

class StockStorageModel extends Model<
  StockStorage,
  StockStorageCreationAttributes
> {
  public storageID!: number
  public productID!: number
  public stockInputStoryID!: number
  public stockOutputStoryID!: number
  public name!: string
  public maximumCapacity!: number
  public totalItem!: number
  public location!: string
  public orderNumber?: number | null
  public slug?: string | null
}

StockStorageModel.init(
  {
    storageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productID: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductModel,
        key: 'productID',
      },
    },
    stockInputStoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: StockInputStoryModel,
        key: 'stockInputStoryID',
      },
    },
    stockOutputStoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: StockOutputStoryModel,
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
    orderNumber: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'stock_storages',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'StockStorage',
  },
)

export default StockStorageModel
