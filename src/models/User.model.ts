import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import UserType from './UserType.model'

const User = connection.define(
  'User',
  {
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: UserType,
        key: 'userTypeID',
      },
    },
    userName: {
      type: DataTypes.STRING,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
  },
)

export default User
