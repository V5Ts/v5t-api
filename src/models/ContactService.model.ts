import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import User from './User.model'
import { ContactService } from '~/utils/interface'

interface CategoryCreationAttributes
  extends Optional<ContactService, 'contactID'> {}

class ContactServiceModel extends Model<
  ContactService,
  CategoryCreationAttributes
> {
  public contactID!: number
  public userID!: number | null
  public zaloID!: string
  public userName!: string
  public phone!: number | null
  public orderNumber?: number | null
  public slug?: string | null
}

ContactServiceModel.init(
  {
    contactID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: 'userID',
      },
    },
    zaloID: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    phone: {
      type: DataTypes.NUMBER,
      allowNull: true,
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
    tableName: 'contact_services',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ContactService',
  },
)

export default ContactServiceModel
