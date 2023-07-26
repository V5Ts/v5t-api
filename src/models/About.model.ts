import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import { About } from '~/utils/interface'

interface AboutCreationAttributes extends Optional<About, 'aboutID'> {}

class AboutModel extends Model<About, AboutCreationAttributes> {
  public aboutID!: number
  public content!: string | null
  public orderNumber?: number | null
  public slug?: string | null
}

AboutModel.init(
  {
    aboutID: {
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
    tableName: 'abouts',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'AboutModel',
  },
)

export default AboutModel
