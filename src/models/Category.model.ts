import { DataTypes, ModelAttributes, Optional } from 'sequelize'
import { BaseModelOptions, createBaseModel } from './BaseModel'
import { CategoryAttributes } from '~/utils/interface'

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, 'category_id'> {}

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

const CategoryModel = createBaseModel<
  CategoryAttributes,
  CategoryCreationAttributes
>('CategoryModel', categoryAttributes, categoryOptions)

// Check if the table exists and create it if it doesn't
CategoryModel.sync()
  .then(() => {
    console.log('Category table created (if it did not exist).')
  })
  .catch((error) => {
    console.error('Error creating Category table:', error)
  })

export default CategoryModel
