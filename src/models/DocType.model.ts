import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'

const DocType = connection.define(
  'DocType',
  {
    docTypeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
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
    tableName: 'doc_types',
    timestamps: true,
  },
)

export default DocType
