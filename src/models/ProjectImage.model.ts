import { DataTypes, Model, Optional } from 'sequelize'
import { ProjectImage } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import FeaturedImageModel from './FeaturedImage.model'

interface ProjectImageCreationAttributes
  extends Optional<ProjectImage, 'projectImageID'> {}

class ProjectImageModel extends Model<
  ProjectImage,
  ProjectImageCreationAttributes
> {
  public projectImageID!: number
  public featuredImageID!: number
  public name!: string
  public projectStatus!: number
  public orderNumber?: number | null
  public slug?: string | null
}

ProjectImageModel.init(
  {
    projectImageID: {
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
    name: {
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
    tableName: 'project_images',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProjectImage',
  },
)

export default ProjectImageModel
