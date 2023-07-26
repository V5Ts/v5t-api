import { DataTypes, Model, Optional } from 'sequelize'
import { StockOutputStory } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import ProductModel from './Product.model'
import UserModel from './User.model'

interface StockOutputStoryCreationAttributes
  extends Optional<StockOutputStory, 'stockOutputStoryID'> {}

class StockOutputStoryModel extends Model<
  StockOutputStory,
  StockOutputStoryCreationAttributes
> {
  public stockOutputStoryID!: number
  public productID!: number
  public userID!: number
  public quantity!: number
  public stockInDate!: string
  public orderNumber?: number | null
  public slug?: string | null
}

StockOutputStoryModel.init(
  {
    stockOutputStoryID: {
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
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModel,
        key: 'userID',
      },
    },
    quantity: {
      type: DataTypes.NUMBER,
    },
    stockOutDate: {
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
    tableName: 'stock_output_stories',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'StockOutputStory',
  },
)

export default StockOutputStoryModel
