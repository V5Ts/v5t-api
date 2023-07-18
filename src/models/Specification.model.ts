import { DataTypes } from 'sequelize'
import { connection } from '~/middlewares/connection'
import SpecificationImage from './SpecificationImage.model'

const Specification = connection.define(
  'Specification',
  {
    specificationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specificationImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: SpecificationImage,
        key: 'specificationImageID',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    content: {
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
    tableName: 'specifications',
    timestamps: true,
  },
)

export default Specification
