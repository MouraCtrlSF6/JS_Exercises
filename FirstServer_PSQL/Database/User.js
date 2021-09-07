require('dotenv').config();
const { Pool } = require('pg')

module.exports = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.HOST,
  port: process.env.DB_PORT
})

