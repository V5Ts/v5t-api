import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'

const About = dbConnection.define(
  'News',
  {
    aboutID: {
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
    tableName: 'about',
    timestamps: true,
  },
)

export default About
