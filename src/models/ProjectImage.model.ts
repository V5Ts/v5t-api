import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import FeaturedImage from './FeaturedImage.model'

const ProjectImage = connection.define(
  'ProjectImage',
  {
    projectImageID: {
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
    name: {
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
    tableName: 'project_images',
    timestamps: true,
  },
)

export default ProjectImage
