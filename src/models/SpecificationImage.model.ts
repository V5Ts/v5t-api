import { DataTypes, Model, Optional } from 'sequelize'
import { SpecificationImage } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import FeaturedImageModel from './FeaturedImage.model'

interface SpecificationImageCreationAttributes
  extends Optional<SpecificationImage, 'specificationImageID'> {}

class SpecificationImageModel extends Model<
  SpecificationImage,
  SpecificationImageCreationAttributes
> {
  public specificationImageID!: number
  public featuredImageID!: number
  public featuredImage!: number
  public orderNumber?: number | null
  public slug?: string | null
}

SpecificationImageModel.init(
  {
    specificationImageID: {
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
    featuredImage: {
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
    tableName: 'specification_images',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'SpecificationImage',
  },
)

export default SpecificationImageModel
