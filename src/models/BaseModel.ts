/* eslint-disable no-unused-vars */
import { ModelAttributes, ModelDefined, Optional } from 'sequelize'
import sequelize from '~/config/sequelize'

export type BaseModelOptions = {
  tableName?: string
  timestamps?: boolean
  freezeTableName?: boolean
  underscored?: boolean
  // Add any other options you want to support
}

export const createBaseModel = <
  T extends ModelAttributes,
  C extends Optional<T, any>,
>(
  modelName: string,
  attributes: ModelAttributes,
  options: BaseModelOptions = {},
): ModelDefined<T, C> => {
  const model = sequelize.define(modelName, attributes, {
    ...options,
  })

  model
    .sync()
    .then(() => {
      console.log(`${model.tableName} table created (if it did not exist).`)
    })
    .catch((error) => {
      console.error(`Error creating ${model.tableName} table:`, error)
    })

  return model
}
