import AboutModel from './About.model'
import CareerModel from './Career.model'
import CategoryModel from './Category.model'
import ContactServiceModel from './ContactService.model'
import DoctypeModel from './Doctype.model'
import DoctypeDocumentModel from './DoctypeDocument.model'
import DocumentModel from './Document.model'
import FeaturedImageModel from './FeaturedImage.model'
import MaintenanceRequestModel from './MaintenanceRequest.model'
import MaintenanceRequestImageModel from './MaintenanceRequestImage.model'
import NewsModel from './News.model'
import ProductModel from './Product.model'
import ProductImageModel from './ProductImage.model'
import ProjectModel from './Project.model'
import ProjectImageModel from './ProjectImage.model'
import ProjectItemModel from './ProjectItem.model'
import QuotationModel from './Quotation.model'
import SpecificationModel from './Specification.model'
import SpecificationImageModel from './SpecificationImage.model'
import StockInputStoryModel from './StockInputStory.model'
import StockOutputStoryModel from './StockOutputStory.model'
import StockStorageModel from './StockStorage.model'
import UserModel from './User.model'
import UserTypeModel from './UserType.model'

AboutModel
CareerModel
ContactServiceModel
NewsModel
ProductModel.belongsTo(CategoryModel, {
  foreignKey: 'categoryID',
})
CategoryModel.hasMany(ProductModel, {
  foreignKey: 'categoryID',
})
DoctypeModel.belongsToMany(DocumentModel, {
  through: DoctypeDocumentModel,
  foreignKey: 'doctypeID',
})
DocumentModel.belongsToMany(ProductModel, {
  through: DoctypeDocumentModel,
  foreignKey: 'documentID',
})
FeaturedImageModel
MaintenanceRequestModel
MaintenanceRequestImageModel
ProductImageModel
ProjectModel
ProjectImageModel
ProjectItemModel
QuotationModel
SpecificationModel.belongsToMany(FeaturedImageModel, {
  through: 'specification_featuredImage',
  foreignKey: 'featuredImageID',
})

SpecificationModel.belongsToMany(ProductModel, {
  through: 'specification_product',
  foreignKey: 'documentationID',
})

SpecificationImageModel.belongsTo(SpecificationModel, {
  foreignKey: 'specificationImageID',
})
StockInputStoryModel
StockOutputStoryModel
StockStorageModel
UserModel
UserTypeModel.belongsToMany(UserModel, {
  through: 'type_users',
  foreignKey: 'userID',
})

export {
  ProductModel,
  ProductImageModel,
  CategoryModel,
  DoctypeModel,
  DocumentModel,
  DoctypeDocumentModel,
  FeaturedImageModel,
  MaintenanceRequestModel,
  MaintenanceRequestImageModel,
  ProjectModel,
  ProjectImageModel,
  ProjectItemModel,
  QuotationModel,
  SpecificationModel,
  SpecificationImageModel,
  StockInputStoryModel,
  StockOutputStoryModel,
  StockStorageModel,
  UserModel,
  UserTypeModel,
}
