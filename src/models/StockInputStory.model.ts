import { DataTypes, Model, Optional } from 'sequelize'
import { StockInputStory } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import ProductModel from './Product.model'
import UserModel from './User.model'

interface StockInputStoryCreationAttributes
  extends Optional<StockInputStory, 'specificationImageID'> {}

class StockInputStoryModel extends Model<
  StockInputStory,
  StockInputStoryCreationAttributes
> {
  public stockInputStoryID!: number
  public productID!: number
  public userID!: number
  public quantity!: number
  public stockInDate!: string
  public orderNumber?: number | null
  public slug?: string | null
}

StockInputStoryModel.init(
  {
    stockInputStoryID: {
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
    stockInDate: {
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
    tableName: 'stock_input_stories',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'StockInputStory',
  },
)

export default StockInputStoryModel
