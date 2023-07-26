import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'
import { Category } from '~/utils/interface'

interface CategoryCreationAttributes extends Optional<Category, 'categoryID'> {}

class CategoryModel extends Model<Category, CategoryCreationAttributes> {
  public categoryID!: number
  public featuredImageID!: number | null
  public name!: string
  public orderNumber?: number | null
  public slug?: string | null
}

CategoryModel.init(
  {
    categoryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    featuredImageID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
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
    tableName: 'categories',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category',
  },
)

export default CategoryModel
