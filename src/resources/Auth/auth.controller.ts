// import passport from 'passport'
import {RequestHandler} from 'express'
// import config from '../../config'
import {User} from '../User/user.interface'
import {createUser} from './auth.service'
export const signup: RequestHandler = async (req, res) => {
	try {
		const {fname, lname, email, password, avatar} = req.body
		const newUser: User = {
			fname,
			lname,
			email,
			password,
			avatar,
		}
		const status = await createUser(newUser)
		console.log(status)
		if (status.error) {
			res.status(400).json(status.error)
		}
		res.status(201).json({message: 'success'})
	} catch (error) {
		res.status(400).json(error)
	}
}
