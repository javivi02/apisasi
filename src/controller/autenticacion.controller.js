import { loginUser } from '../service/autenticacion.service.js'

export const loginController = async (req, res) => {

  const user = req.body

  try {
    const resultado = await loginUser(user)
    if (resultado === 1) return res.send('El usuario no existe')
    if (resultado === 2) return res.send('La contraseña no es correcta')

    res.send(resultado)

  } catch (error) {
    console.log(error)
    res.send('Error al loguear el usuario')
  }

}

export const checkController = async (req, res) => {
  res.status(200)
  res.send('Usuario con token correcto')
}