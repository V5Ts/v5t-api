import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import DocType from './DocType.model'

const Documentation = connection.define(
  'Documentation',
  {
    documentationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    docTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: DocType,
        key: 'docTypeID',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.FLOAT,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'documentations',
    timestamps: true,
  },
)

export default Documentation
