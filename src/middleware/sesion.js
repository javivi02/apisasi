import { verifyToken } from '../utils/jwt.handle.js'

const checkSession = (req, res, next) => {
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
    res.status(200)
    res.send(e.message.toString().toUpperCase())
  }
}

export { checkSession }