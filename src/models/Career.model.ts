import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'

const Career = dbConnection.define(
  'Career',
  {
    careerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'careers',
    timestamps: true,
  },
)

export default Career
