import { sequelize } from '../bbdd/connection.js'
import { modeloUsuarios } from '../bbdd/models/usuarios.js'
import { verified } from '../utils/bcrypt.handle.js'
import { generateToken } from '../utils/jwt.handle.js'

const Usuarios = modeloUsuarios(sequelize)

const loginUser = async ({ Usuario, Contraseña }) => {

  const isCheckUser = await Usuarios.findAll({ where: { Usuario } })
  if (isCheckUser.length === 0) return (1)

  const passHash = isCheckUser[0].Contraseña

  const isCorrect = await verified(Contraseña, passHash)
  if (!isCorrect) return (2)

  const usuario = isCheckUser[0].Usuario

  const result = await sequelize.query(`SELECT
    Miembros_departamento.Nombre,
    Usuarios.Usuario
    FROM Miembros_departamento
    LEFT OUTER JOIN Usuarios ON Miembros_departamento.Matricula_rtve = Usuarios.Matricula_rtve
    WHERE Usuarios.Usuario = '${usuario}'`)

  const { Nombre } = result[0][0]

  return {
    usuario,
    nombre: Nombre,
    islogged: true,
    token: generateToken(isCheckUser[0].UsuariosID),
    isExpired: false
  }

}

export { loginUser }