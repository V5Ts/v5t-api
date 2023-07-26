import { DataTypes, Model, Optional } from 'sequelize'
import { MaintenanceRequestImage } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import FeaturedImageModel from './FeaturedImage.model'

interface MaintenanceRequestImageCreationAttributes
  extends Optional<MaintenanceRequestImage, 'requestImageID'> {}

class MaintenanceRequestImageModel extends Model<
  MaintenanceRequestImage,
  MaintenanceRequestImageCreationAttributes
> {
  public requestImageID!: number
  public featuredImageID!: number
  public orderNumber?: number | null
  public slug?: string | null
}

MaintenanceRequestImageModel.init(
  {
    requestImageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    featuredImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: FeaturedImageModel,
        key: 'featuredImageID',
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
    tableName: 'maintenance_request_images',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'MaintenanceRequestImage',
  },
)

export default MaintenanceRequestImageModel
