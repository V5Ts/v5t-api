import { DataTypes, Model, Optional } from 'sequelize'
import { UserType } from '~/utils/interface'
import sequelize from '~/config/sequelize'

interface UserTypeCreationAttributes extends Optional<UserType, 'userTypeID'> {}

class UserTypeModel extends Model<UserType, UserTypeCreationAttributes> {
  public userTypeID!: number
  public title!: string
  public orderNumber?: number | null
  public slug?: string | null
}

UserTypeModel.init(
  {
    userTypeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
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
    tableName: 'user_types',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserType',
  },
)

export default UserTypeModel
