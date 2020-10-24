import Env from 'dotenv'

Env.config()

export const config = {
	port: process.env.PORT || 4000,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
}
