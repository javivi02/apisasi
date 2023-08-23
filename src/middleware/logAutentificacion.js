export const logMiddlewareLogin = (req, res, next) => {

  console.log('logMiddlewareLogin')

  next()
}