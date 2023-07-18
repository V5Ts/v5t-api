import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import Category from './Category.model'
import User from './User.model'
import ProjectImage from './ProjectImage.model'

const Project = connection.define(
  'Project',
  {
    projectID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: ProjectImage,
        key: 'projectImageID',
      },
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'userID',
      },
    },
    projectItemID: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
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
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'projects',
    timestamps: true,
  },
)

export default Project
