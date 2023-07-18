import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'

const Career = connection.define(
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
