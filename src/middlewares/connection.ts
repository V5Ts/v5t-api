import { Sequelize } from 'sequelize'
import keys from '~/utils/keys'
import logging from '~/utils/logging'

const NAMESPACE = '[model/index]'

const { host, port, user, password, database, pool } = keys.mysql

const connection = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: 'mysql',
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
})

connection
  .authenticate()
  .then(() => {
    logging.info(NAMESPACE, '[✅] Database connected!!!')
  })
  .catch((err) => {
    logging.error(NAMESPACE, '[❌] Connection fail!!~' + err)
  })

export { connection }
