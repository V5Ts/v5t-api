import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'

const About = connection.define(
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
