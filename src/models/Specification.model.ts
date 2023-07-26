import { DataTypes, Model, Optional } from 'sequelize'
import { Specification } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import SpecificationImageModel from './SpecificationImage.model'

interface SpecificationCreationAttributes
  extends Optional<Specification, 'specificationID'> {}

class SpecificationModel extends Model<
  Specification,
  SpecificationCreationAttributes
> {
  public specificationID!: number
  public specificationImageID!: number
  public name!: number
  public content!: number
  public orderNumber?: number | null
  public slug?: string | null
}

SpecificationModel.init(
  {
    specificationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specificationImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: SpecificationImageModel,
        key: 'specificationImageID',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    content: {
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
    tableName: 'specifications',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Specification',
  },
)

export default SpecificationModel
