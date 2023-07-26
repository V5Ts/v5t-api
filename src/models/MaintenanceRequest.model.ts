import { DataTypes, Model, Optional } from 'sequelize'
import Product from './Product.model'
import User from './User.model'
import MaintenanceRequestImage from './MaintenanceRequestImage.model'
import { MaintenanceRequest } from '~/utils/interface'
import sequelize from '~/config/sequelize'

interface MaintenanceRequestCreationAttributes
  extends Optional<MaintenanceRequest, 'requestID'> {}

class MaintenanceRequestModel extends Model<
  MaintenanceRequest,
  MaintenanceRequestCreationAttributes
> {
  public featuredImageID!: number
  public featuredImage!: string
  public thumbnail!: string | null
  public orderNumber?: number | null
  public slug?: string | null
}

MaintenanceRequestModel.init(
  {
    requestID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    requestImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: MaintenanceRequestImage,
        key: 'requestImageID',
      },
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
    fullName: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    whoYou: {
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
    tableName: 'maintenance_requests',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'MaintenanceRequest',
  },
)

export default MaintenanceRequest
