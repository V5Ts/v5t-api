import { DataTypes, ModelAttributes, Optional } from 'sequelize'
import { BaseModelOptions, createBaseModel } from './BaseModel'
import { Category } from '~/utils/interface'

interface CategoryCreationAttributes
  extends Optional<Category, 'category_id'> {}

const categoryAttributes: ModelAttributes = {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  featured_image_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  order_number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  slug: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}

const categoryOptions: BaseModelOptions = {
  tableName: 'categories',
  timestamps: false,
  freezeTableName: true,
  underscored: true,
}

const CategoryModel = createBaseModel<Category, CategoryCreationAttributes>(
  'CategoryModel',
  categoryAttributes,
  categoryOptions,
)

export default CategoryModel
