import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// initialization
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.disable('x-powered-by') // con esto deshabilitamos la cabecera X-Powered-By: Express

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// static files
app.use(express.static(join(__dirname, 'public')))

// starting the server web and Rest API
app.listen(3333)
console.log('Server on port ...', 3333)