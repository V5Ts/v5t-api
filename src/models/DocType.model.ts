import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import { Doctype } from '~/utils/interface'

interface DoctypeCreationAttributes extends Optional<Doctype, 'docTypeID'> {}

class DoctypeModel extends Model<Doctype, DoctypeCreationAttributes> {
  public docTypeID!: number
  public name!: string
  public description!: string
  public orderNumber?: number | null
  public slug?: string | null
}

DoctypeModel.init(
  {
    doctypeID: {
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
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'doc_types',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Doctype',
  },
)

export default DoctypeModel
