import dotenv from 'dotenv'
dotenv.config()

export default {
  server: {
    port: process.env.PORT || 8080,
    host: process.env.SERVER_HOST || 'localhost',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE_NAME || 'mysql_db_name',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || 'root@123',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  cloudinary: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.CLOUD_API_KEY,
    apiSecret: process.env.CLOUD_API_SECRET,
  },
}
