import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import FeaturedImage from './FeaturedImage.model'

const MaintenanceRequestImage = connection.define(
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
