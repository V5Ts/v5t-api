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
  return sequelize.define(modelName, attributes, {
    ...options,
  })
}
