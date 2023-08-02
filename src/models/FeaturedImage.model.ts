import { DataTypes, Model, Optional } from 'sequelize'
import { FeaturedImage } from '~/utils/interface'
import sequelize from '~/config/sequelize'

interface FeaturedImageCreationAttributes
  extends Optional<FeaturedImage, 'featuredImageID'> {}

class FeaturedImageModel extends Model<
  FeaturedImage,
  FeaturedImageCreationAttributes
> {
  public featuredImageID!: number
  public featuredImage!: string
  public thumbnail!: string | null
  public orderNumber?: number | null
  public slug?: string | null
}

FeaturedImageModel.init(
  {
    featured_image_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    featured_image: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    order_number: {
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
    tableName: 'featured_images',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'FeaturedImage',
  },
)

export default FeaturedImageModel
