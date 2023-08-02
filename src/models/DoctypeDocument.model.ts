import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import DoctypeModel from './Doctype.model'
import { DoctypeDocument } from '~/utils/interface'
import DocumentModel from './Document.model'

interface DoctypeDocumentCreationAttributes
  extends Optional<DoctypeDocument, 'doctypeDocumentID'> {}

class DoctypeDocumentModel extends Model<
  DoctypeDocument,
  DoctypeDocumentCreationAttributes
> {
  public doctypeDocumentID!: number
  public documentID!: number
  public doctypeID!: number
  public orderNumber?: number | null
  public slug?: string | null
}

DoctypeDocumentModel.init(
  {
    doctypeDocumentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    documentID: {
      type: DataTypes.INTEGER,
      references: {
        model: DocumentModel,
        key: 'documentID',
      },
    },
    doctypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: DoctypeModel,
        key: 'doctypeID',
      },
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
    tableName: 'doctype_documents',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'DoctypeDocument',
  },
)

export default DoctypeDocumentModel
