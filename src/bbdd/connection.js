import { Sequelize } from 'sequelize'
import { DB } from '../config.js'

export const sequelize = new Sequelize(
  DB.database, DB.username, DB.password, {
  host: DB.host,
  dialect: DB.dialect
})