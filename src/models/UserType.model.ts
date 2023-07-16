import { DataTypes } from 'sequelize'
import { dbConnection } from '~/middlewares/db-connection'

const UserType = dbConnection.define(
  'UserType',
  {
    userTypeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'user_types',
    timestamps: true,
  },
)

export default UserType
