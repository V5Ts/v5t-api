import { DataTypes, ModelAttributes, Optional } from 'sequelize'
import { FeaturedImage } from '~/utils/interface'
import { BaseModelOptions, createBaseModel } from './BaseModel'

interface FeaturedImageCreationAttributes
  extends Optional<FeaturedImage, 'featured_image_id'> {}

const featuredImageAttributes: ModelAttributes = {
  featured_image_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  featured_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  order_number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  slug: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}

const options: BaseModelOptions = {
  tableName: 'featured_images',
  timestamps: false,
  freezeTableName: true,
  underscored: true,
}

const FeaturedImageModel = createBaseModel<
  FeaturedImage,
  FeaturedImageCreationAttributes
>('FeaturedImageModel', featuredImageAttributes, options)

export default FeaturedImageModel
