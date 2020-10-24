import Mongoose from 'mongoose'

//Env variables
import { config } from '../config'

const USER: string = encodeURIComponent(config.dbUser!)
const PASSWORD: string = encodeURIComponent(config.dbPassword!)

const MONGO_URI: string = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}?retryWrites=true&w=majority`

export async function Connect() {
	try {
		await Mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		console.log('=> DB is connected')
	} catch (error) {
		console.log('=> Somethig goes wrong!\n' + error)
	}
}
