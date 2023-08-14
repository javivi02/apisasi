import { Sequelize } from 'sequelize'
export const sequelize = new Sequelize('bbdd_soporte', 'jga', 'j4v13r', {
  host: '192.28.1.173',
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
})