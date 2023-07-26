import { DataTypes, Model, Optional } from 'sequelize'
import { Project } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import CategoryModel from './Category.model'
import ProjectImageModel from './ProjectImage.model'
import UserModel from './User.model'

interface ProjectCreationAttributes extends Optional<Project, 'projectID'> {}

class ProjectModel extends Model<Project, ProjectCreationAttributes> {
  public projectID!: number
  public projectImageID!: number
  public userID!: number
  public projectItemID!: number
  public name!: string
  public projectStatus!: number
  public orderNumber?: number | null
  public slug?: string | null
}

ProjectModel.init(
  {
    projectID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: ProjectImageModel,
        key: 'projectImageID',
      },
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModel,
        key: 'userID',
      },
    },
    projectItemID: {
      type: DataTypes.INTEGER,
      references: {
        model: CategoryModel,
        key: 'categoryID',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    projectStatus: {
      type: DataTypes.INTEGER,
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
    tableName: 'projects',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Project',
  },
)

export default ProjectModel
