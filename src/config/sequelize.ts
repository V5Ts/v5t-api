import { Sequelize } from 'sequelize'
import keys from '~/utils/keys'
import logging from '~/utils/logging'
import { createPool } from 'mysql2'

const NAMESPACE = '[config/sequelize]'

const { host, port, user, password, database, pool } = keys.mysql

const poolConfig = createPool({
  host,
  port,
  user,
  password,
})

const createDatabaseIfNotExists = async (dbName: string): Promise<void> => {
  try {
    await poolConfig
      .promise()
      .query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`)
    logging.info(
      NAMESPACE,
      `[✅] Database "${dbName}" created or already exists.`,
    )
  } catch (err) {
    logging.error(NAMESPACE, `[❌] Database "${dbName}" creation failed:`, err)
  }
}

const sequelize = new Sequelize(database, user, password, {
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

// Create the main database if it doesn't exist
createDatabaseIfNotExists(database).then(() => {
  const connectToDatabase = async () => {
    try {
      await sequelize.authenticate()
      logging.info(NAMESPACE, '[✅] Database connected!!!')
    } catch (err) {
      logging.error(NAMESPACE, '[❌] Connection failed!!~', err)
    }
  }

  connectToDatabase()
})

export default sequelize
