import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'
import User from './User.model'

const News = dbConnection.define(
  'News',
  {
    newsID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'userID',
      },
    },
    title: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    newsStatus: {
      type: DataTypes.INTEGER,
    },
    postStatus: {
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
    tableName: 'news',
    timestamps: true,
  },
)

export default News
