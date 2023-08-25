import { Sequelize } from 'sequelize'
export const sequelize = new Sequelize('bbdd_soporte', 'newsasi', 'j4v13r', {
  host: '172.28.136.165',
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
})