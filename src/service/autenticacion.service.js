import { sequelize } from '../bbdd/connection.js'
import { modeloUsuarios } from '../bbdd/models/usuarios.js'
import { verified } from '../utils/bcrypt.handle.js'
import { generateToken } from '../utils/jwt.handle.js'

const Usuarios = modeloUsuarios(sequelize)

const loginUser = async ({ Usuario, Contrasena }) => {

  const isCheckUser = await Usuarios.findAll({ where: { Usuario } })
  if (isCheckUser.length === 0) return (1)

  const passHash = isCheckUser[0].Contrasena

  const isCorrect = await verified(Contrasena, passHash)
  if (!isCorrect) return (2)

  return {
    Usuario: isCheckUser[0].Usuario,
    islogged: true,
    token: generateToken(isCheckUser[0].UsuariosID)
  }

}

export { loginUser }