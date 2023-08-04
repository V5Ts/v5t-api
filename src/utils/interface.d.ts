export interface BaseModel {
  [key: string]: any
  order_number?: number | null
  slug?: string | null
}

export interface Category extends BaseModel {
  category_id: number
  featured_image_id: number
  name: string
}

export interface Career extends BaseModel {
  careerID: number
  content: string
}

export interface About extends BaseModel {
  aboutID: number
  content: string
}

export interface Product extends BaseModel {
  productID: number
  specificationID: number
  productImageID: number
  categoryID: number
  documentID: number
  productName: string
  productDescription: string
  productContent: string
  productCode: string
  createdDate: string
  updatedDate: string
}

export interface FeaturedImage extends BaseModel {
  featured_image_id: number
  featured_image?: string | null
  thumbnail?: string | null
}

export interface Doctype extends BaseModel {
  doctypeID: number
  name: string
  description: string
}

export interface DoctypeDocument extends BaseModel {
  doctypeDocumentID: number
  documentID: number
  doctypeID: number
}

export interface ContactService extends BaseModel {
  contactID: number
  userID: number
  zaloID: string
  userName: string
  phone: string
}

export interface Document extends BaseModel {
  documentID: number
  doctypeID: number
  name: string
  language: string
  size: number
}

export interface DoctypeDocument extends BaseModel {
  doctypeDocumentID: number
  doctypeID: number
  name: string
  language: string
  size: number
}

export interface MaintenanceRequest extends BaseModel {
  requestID: number
  requestImageID: number
  productID: number
  userID: number
  fullName: string
  userName: string
  phone: string
  location: string
  whoYou: string
}

export interface MaintenanceRequestImage extends BaseModel {
  requestImageID: number
  featuredImageID: number
}

export interface News extends BaseModel {
  newsID: number
  userID: number
  title: string
  summary: string
  content: string
  newsStatus: number
  postStatus: number
}

export interface Product extends BaseModel {
  productID: number
  specificationID: number
  productImageID: number
  categoryID: number
  documentationID: number
  productName: string
  productDescription: string
  productContent: string
  productCode: string
}

export interface ProductImage extends BaseModel {
  productImageID: number
  featuredImageID: number
  featuredImage: string
  thumbnail: string
}

export interface Project extends BaseModel {
  projectID: number
  projectImageID: number
  userID: number
  projectItemID: number
  name: string
  projectStatus: number
}

export interface ProjectImage extends BaseModel {
  projectImageID: number
  featuredImageID: number
  name: string
}

export interface ProjectItem extends BaseModel {
  projectItemID: number
  productID: number
  quantity: number
  projectStatus: number
}

export interface Quotation extends BaseModel {
  quotationID: number
  productID: number
  userID: number
}

export interface Specification extends BaseModel {
  specificationID: number
  specificationImageID: number
  name: string
  content: string
}

export interface SpecificationImage extends BaseModel {
  specificationImageID: number
  featuredImageID: number
  featuredImage: string
}

export interface StockInputStory extends BaseModel {
  stockInputStoryID: number
  productID: number
  userID: number
  quantity: number
  stockInDate: string
}

export interface StockOutputStory extends BaseModel {
  stockOutputStoryID: number
  productID: number
  userID: number
  quantity: number
  stockOutDate: string
}

export interface StockStorage extends BaseModel {
  storageID: number
  productID: number
  stockInputStoryID: number
  stockOutputStoryID: number
  name: string
  description: string
  maximumCapacity: number
  totalItem: number
  location: string
}

export interface User extends BaseModel {
  userID: number
  userTypeID: number
  userName: string
  fullName: string
  phone: string
  email: string
  address: string
  avatar: string
}

export interface UserType extends BaseModel {
  userTypeID: number
  title: string
}
