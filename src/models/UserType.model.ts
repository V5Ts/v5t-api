import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'

const UserType = connection.define(
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
