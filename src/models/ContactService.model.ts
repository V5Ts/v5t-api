import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import User from './User.model'

const ContactService = connection.define(
  'ContactService',
  {
    contactID: {
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
    zaloID: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    phone: {
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
    tableName: 'contact_services',
    timestamps: true,
  },
)

export default ContactService
