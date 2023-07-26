import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import { Career } from '~/utils/interface'

interface CareerCreationAttributes extends Optional<Career, 'careerID'> {}

class CareerModel extends Model<Career, CareerCreationAttributes> {
  public careerID!: number
  public content!: string | null
  public orderNumber?: number | null
  public slug?: string | null
}

CareerModel.init(
  {
    careerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
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
    tableName: 'careers',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Career',
  },
)

export default CareerModel
