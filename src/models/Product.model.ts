import { DataTypes, Model, Optional } from 'sequelize'
import { Product } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import CategoryModel from './Category.model'
import DocumentationModel from './Documentation.model'
import ProductImageModel from './ProductImage.model'
import SpecificationModel from './Specification.model'

interface ProductCreationAttributes extends Optional<Product, 'newsID'> {}

class ProductModel extends Model<Product, ProductCreationAttributes> {
  public productID!: number
  public specificationID!: number
  public productImageID!: number
  public categoryID!: number
  public documentationID!: number
  public productName!: string
  public productDescription?: string | null
  public productContent?: string | null
  public productCode!: string
  public orderNumber?: number | null
  public slug?: string | null
}

ProductModel.init(
  {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specificationID: {
      type: DataTypes.INTEGER,
      references: {
        model: SpecificationModel,
        key: 'specificationID',
      },
    },
    productImageID: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductImageModel,
        key: 'productImageID',
      },
    },
    categoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: CategoryModel,
        key: 'categoryID',
      },
    },
    documentationID: {
      type: DataTypes.INTEGER,
      references: {
        model: DocumentationModel,
        key: 'documentationID',
      },
    },
    productName: {
      type: DataTypes.STRING,
    },
    productDescription: {
      type: DataTypes.STRING,
    },
    productContent: {
      type: DataTypes.STRING,
    },
    productCode: {
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
    tableName: 'products',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
  },
)

export default ProductModel
