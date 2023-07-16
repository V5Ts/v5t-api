import mysql from 'mysql2'
import keys from '~/utils/keys'

const { user, password, database, host, port } = keys.mysql

const params: mysql.ConnectionOptions = {
  user: user,
  password: password,
  database: database,
  host: host,
  port: port,
}

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params)
    connection.connect((error) => {
      if (error) {
        reject(error)
        return
      }
      resolve(connection)
    })
  })

const Query = async (connection: mysql.Connection, query: string) =>
  new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result)
    })
  })

export { Connect, Query }
