import express from 'express'

import { createServer } from 'http'
import { Server } from 'socket.io'

// Middleware
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

import LogHttpRequest from './Middlewares/LogHttpRequest'

// Router
import NoMatchRouter from './Routes/NoMatch'

// Listeners
import MainListener from './Listeners'

const app = express()

const server = createServer(app)

const io = new Server(server)

// Middleware
app.use(compression())
app.use(helmet())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.use(LogHttpRequest)

io.on('connection', MainListener)

// Router
app.use('*', NoMatchRouter)

export default server
