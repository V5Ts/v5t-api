import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import DocTypeModel from './DocType.model'
import { Documentation } from '~/utils/interface'

interface DocumentationCreationAttributes
  extends Optional<Documentation, 'documentationID'> {}

class DocumentationModel extends Model<
  Documentation,
  DocumentationCreationAttributes
> {
  public documentationID!: number
  public docTypeID!: number
  public name!: string
  public language!: string
  public size!: number | null
  public orderNumber?: number | null
  public slug?: string | null
}

DocumentationModel.init(
  {
    documentationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    docTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: DocTypeModel,
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
    tableName: 'documentations',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Documentation',
  },
)

export default DocumentationModel
