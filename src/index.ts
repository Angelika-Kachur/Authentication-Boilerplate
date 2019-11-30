import app from './server'
import config from './config'
import connectDb from './services/database/db'

connectDb()
	.then(() => {
		console.log('DB is connected')
	})
	.catch(() => {
		console.log('DB is not connected')
	})

const server = app.listen(config.authPort, () => {
	console.log('server is running on port:', config.authPort)
})

process.on('unhandledRejection', e => {
	server.close(() => {
		process.exit(1)
	})
})
