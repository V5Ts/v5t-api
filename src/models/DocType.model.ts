import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import { DocType } from '~/utils/interface'

interface DocTypeCreationAttributes extends Optional<DocType, 'docTypeID'> {}

class DocTypeModel extends Model<DocType, DocTypeCreationAttributes> {
  public docTypeID!: number
  public name!: string
  public description!: string
  public orderNumber?: number | null
  public slug?: string | null
}

DocTypeModel.init(
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
    modelName: 'DocType',
  },
)

export default DocTypeModel
