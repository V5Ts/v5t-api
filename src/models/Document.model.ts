import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import DoctypeModel from './Doctype.model'
import { Document } from '~/utils/interface'

interface DocumentCreationAttributes extends Optional<Document, 'documentID'> {}

class DocumentModel extends Model<Document, DocumentCreationAttributes> {
  public documentID!: number
  public doctypeID!: number
  public name!: string
  public language!: string
  public size!: number | null
  public orderNumber?: number | null
  public slug?: string | null
}

DocumentModel.init(
  {
    documentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    doctypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: DoctypeModel,
        key: 'doctypeID',
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
    tableName: 'documents',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Document',
  },
)

export default DocumentModel
