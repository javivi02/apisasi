import { verifyToken } from '../utils/jwt.handle.js'
import { logger } from '../utils/logs.js'

const checkSession = (req, res, next) => {

  const { Usuario } = req.body

  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser.split(' ').pop()

    // Lo que retorna verifyToken es el payload del jwt, es decir en nuestro caso el id del usuario, que hemos
    // indicado en la parte del login

    // Si no existe usuario se metera en el catch y se enviara el mensaje de error

    req.user = verifyToken(`${jwt}`)
    next()

  } catch (e) {

    //console.log(e.message)
    logger.warn(`El usuario ${Usuario} ->`, e.message.toString().toUpperCase())
    // logger.error(e.message.toString())
    res.status(200)
    res.send(e.message.toString().toUpperCase())
  }
}

export { checkSession }