import { DataTypes, Model, Optional } from 'sequelize'
import { ProjectItem } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import ProductModel from './Product.model'

interface ProjectItemCreationAttributes
  extends Optional<ProjectItem, 'projectItemID'> {}

class ProjectItemModel extends Model<
  ProjectItem,
  ProjectItemCreationAttributes
> {
  public projectItemID!: number
  public productID!: number
  public quantity!: number
  public projectStatus!: number
  public orderNumber?: number | null
  public slug?: string | null
}

ProjectItemModel.init(
  {
    projectItemID: {
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
    quantity: {
      type: DataTypes.NUMBER,
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
    tableName: 'project_items',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProjectItem',
  },
)

export default ProjectItemModel
