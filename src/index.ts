import Express, { Application } from 'express'
import Morgan from 'morgan'
import Cors from 'cors'

//Routes
import Products from './routes/product'

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
app.get('/', function (req, res) {
	res.send('Hello World!') // This will serve your request to '/'.
})
app.use('/api', Products)

//Start server
app.listen(app.get('port'), () => {
	console.log(`=> Server on port ${app.get('port')}`)
})
