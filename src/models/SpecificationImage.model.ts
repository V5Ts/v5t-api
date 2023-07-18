import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import FeaturedImage from './FeaturedImage.model'

const SpecificationImage = connection.define(
  'SpecificationImage',
  {
    specificationImageID: {
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
    featuredImage: {
      type: DataTypes.STRING,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'specification_images',
    timestamps: true,
  },
)

export default SpecificationImage
