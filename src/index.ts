import Express, { Application } from 'express'
import Morgan from 'morgan'
import Cors from 'cors'

//Initialization
const app: Application = Express()

//Env variables
import { config } from './config'

//DB configuration
import { Connect } from './utils/db'
Connect()

//Settings
app.set('port', config.port)

//Middlewares
app.use(Morgan('dev'))
app.use(Express.json())
app.use(Cors())

// Routes
// app.use('/api')

//Start server
app.listen(app.get('port'), () => {
	console.log(`=> Server on port ${app.get('port')}`)
})
