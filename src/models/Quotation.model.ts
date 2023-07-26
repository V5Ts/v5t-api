import { DataTypes, Model, Optional } from 'sequelize'
import { Quotation } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import ProductModel from './Product.model'
import UserModel from './User.model'

interface QuotationCreationAttributes
  extends Optional<Quotation, 'quotationID'> {}

class QuotationModel extends Model<Quotation, QuotationCreationAttributes> {
  public quotationID!: number
  public productID!: number
  public userID!: number
  public orderNumber?: number | null
  public slug?: string | null
}

QuotationModel.init(
  {
    quotationID: {
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
    tableName: 'quotations',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Quotation',
  },
)

export default QuotationModel
