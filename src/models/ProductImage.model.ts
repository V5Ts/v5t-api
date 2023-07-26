import { DataTypes, Model, Optional } from 'sequelize'
import { ProductImage } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import FeaturedImageModel from './FeaturedImage.model'

interface ProductImageCreationAttributes
  extends Optional<ProductImage, 'productImageID'> {}

class ProductImageModel extends Model<
  ProductImage,
  ProductImageCreationAttributes
> {
  public productImageID!: number
  public featuredImageID!: number
  public featuredImage?: string | null
  public thumbnail?: string | null
  public orderNumber?: number | null
  public slug?: string | null
}

ProductImageModel.init(
  {
    productImageID: {
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
    thumbnail: {
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
    tableName: 'product_images',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductImage',
  },
)

export default ProductImageModel
