import { loginUser } from '../service/autenticacion.service.js'
import { logger } from '../utils/logs.js'

export const loginController = async (req, res) => {

  const user = req.body

  try {
    const resultado = await loginUser(user)

    if (resultado === 1) {
      logger.warn('El usuario no existe')
      return res.send('El usuario no existe')
    }
    if (resultado === 2) {
      logger.warn('La contraseña no es correcta')
      return res.send('La contraseña no es correcta')
    }

    logger.info('Detalle :', resultado)

    res.send(resultado)

  } catch (error) {
    console.log(error)
    logger.error('Error al loguear el usuario')
    res.send('Error al loguear el usuario')
  }

}

export const checkController = async (req, res) => {

  const { id } = req.user

  logger.info(`Usuario con id ${id} tiene un token correcto`)
  res.status(200)
  res.send('Usuario con token correcto')
}