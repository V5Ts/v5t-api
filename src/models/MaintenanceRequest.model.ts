import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import Product from './Product.model'
import User from './User.model'
import MaintenanceRequestImage from './MaintenanceRequestImage.model'

const MaintenanceRequest = dbConnection.define(
  'MaintenanceRequest',
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
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'maintenance_requests',
    timestamps: true,
  },
)

export default MaintenanceRequest
