import { Router } from 'express'
import { logMiddlewareLogin } from '../middleware/logAutentificacion.js'
import { checkController, loginController } from '../controller/autenticacion.controller.js'
import { checkSession } from '../middleware/sesion.js'

const router = Router()

router.post('/api/login', logMiddlewareLogin, loginController)
router.post('/api/check', checkSession, checkController)

export default router