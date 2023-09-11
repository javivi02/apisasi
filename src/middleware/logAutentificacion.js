import { logger } from '../utils/logs.js'

export const logMiddlewareLogin = (req, res, next) => {
  // logger.info('Login de usuario :', req.body)
  next()
}