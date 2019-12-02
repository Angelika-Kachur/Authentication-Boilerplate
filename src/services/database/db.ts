import mongoose from 'mongoose'
import config from '../../config'
//there in config we use dbUrl

const connectDb = (url = config.dbUrl, opts = {}) => {
	return mongoose.connect(url, {
		...opts,
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
}

// const connectDb = (url = config.dbUrl, opts: {}) => {
// 	return mongoose.connect(url, {
// 		...opts,
// 	})
// }

// connectDb()

export default connectDb
