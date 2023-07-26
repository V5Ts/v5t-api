import { DataTypes, Model, Optional } from 'sequelize'
import { News } from '~/utils/interface'
import sequelize from '~/config/sequelize'
import UserModel from './User.model'

interface NewsCreationAttributes extends Optional<News, 'newsID'> {}

class NewsModel extends Model<News, NewsCreationAttributes> {
  public newsID!: number
  public userID!: number
  public title!: string
  public summary!: string
  public content!: string
  public newsStatus!: number
  public postStatus!: number
  public orderNumber?: number | null
  public slug?: string | null
}

NewsModel.init(
  {
    newsID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModel,
        key: 'userID',
      },
    },
    title: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    newsStatus: {
      type: DataTypes.INTEGER,
    },
    postStatus: {
      type: DataTypes.INTEGER,
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
    tableName: 'news',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'News',
  },
)

export default NewsModel
