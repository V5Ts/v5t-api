import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import FeaturedImage from './FeaturedImage.model'

const MaintenanceRequestImage = dbConnection.define(
  'MaintenanceRequestImage',
  {
    requestImageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    featuredImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: FeaturedImage,
        key: 'featuredImageID',
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
    tableName: 'maintenance_request_images',
    timestamps: true,
  },
)

export default MaintenanceRequestImage
