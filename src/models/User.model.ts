import { DataTypes, Model, Optional } from 'sequelize'
import { User } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import UserTypeModel from './UserType.model'

interface UserCreationAttributes extends Optional<User, 'storageID'> {}

class UserModel extends Model<User, UserCreationAttributes> {
  public userID!: number
  public userTypeID!: number
  public userName?: number
  public fullName?: number
  public phone?: string | null
  public email?: string | null
  public address?: string | null
  public avatar?: string | null
  public location?: string | null
  public orderNumber?: number | null
  public slug?: string | null
}

UserModel.init(
  {
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userTypeID: {
      type: DataTypes.INTEGER,
      references: {
        model: UserTypeModel,
        key: 'userTypeID',
      },
    },
    userName: {
      type: DataTypes.STRING,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    avatar: {
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
    tableName: 'users',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  },
)

export default UserModel
