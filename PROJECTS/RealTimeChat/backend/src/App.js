import express from 'express'

// Middleware
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

import LogHttpRequest from './Middlewares/LogHttpRequest'

// Router
import NoMatchRouter from './Routes/NoMatch'

const app = express()

// Middleware
app.use(compression())
app.use(helmet())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.use(LogHttpRequest)

// Router

app.use('*', NoMatchRouter)

export default app
