import pkg from 'jsonwebtoken'
const { sign, verify } = pkg

const JWT_SECRET = 'j4v13r'

const generateToken = (id) => {
  const token = sign({ id }, JWT_SECRET, {
    expiresIn: '360s',
  })
  //logger.info(`Token generado para el usario con ID (${id}) -->`, token)
  return token
}

const verifyToken = (jwt) => {
  return verify(jwt, JWT_SECRET)
}

export { generateToken, verifyToken }