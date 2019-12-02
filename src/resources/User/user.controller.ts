import {RequestHandler} from 'express'

//createNewUser,
import {queryAllUsers, queryUser, updateUser, removeUser} from './user.service'

// export const postUser: RequestHandler = async (req, res) => {
// 	try {
// 		const {fname, lname, password, avatar, email} = req.body
// 		const user = await createNewUser(fname, lname, password, avatar, email)
// 		res.status(201).json(user)
// 	} catch (error) {
// 		res.status(400).json({error: 'error at PostUser' + error})
// 	}
// }

export const getAllUsers: RequestHandler = async (req, res) => {
	try {
		const allUsers = await queryAllUsers()
		res.status(200).json(allUsers)
	} catch (error) {
		res.status(400).json({error: 'error at GetAllUsers: ' + error})
	}
}

export const getUser: RequestHandler = async (req, res) => {
	try {
		const {email} = req.params
		const user = await queryUser(email)
		res.status(200).json(user)
	} catch (error) {
		res.status(400).json({error: 'error at GetUser: ' + error})
	}
}

export const putUser: RequestHandler = async (req, res) => {
	try {
		const {fname, lname, password, avatar, email} = req.body
		const user = await updateUser({fname, lname, password, avatar, email})
		res.status(200).json(user)
	} catch (error) {
		res.status(400).json({error: 'error at PutUser: ' + error})
	}
}

export const deleteUser: RequestHandler = async (req, res) => {
	try {
		const {email} = req.params
		await removeUser(email)
		res.status(200).json({message: 'success'})
	} catch (error) {
		res.status(400).json({error: 'error at DeleteUser: ' + error})
	}
}
