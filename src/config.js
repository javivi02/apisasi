// Puerto del servidor
export const PORT = process.env.NODE_LOCAL_PORT ?? 3333

// Configuración de la base de datos
/*export const DB = {
  host: '172.28.136.165',
  database: 'bbdd_soporte',
  username: 'newsasi',
  password: 'j4v13r',
  dialect: 'mysql' /!* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' *!/
}*/

export const DB = {
  host: process.env.DB_HOST ?? '192.28.1.173',
  database: process.env.DB_DATABASE ?? 'bbdd_soporte',
  username: process.env.DB_USER ?? 'jga',
  password: process.env.DB_PASSWORD ?? 'j4v13r',
  port: process.env.DB_LOCAL_PORT ?? 3306,
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
}