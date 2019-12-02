import UserModel from './user.model'
import {User} from './user.interface'
export const createNewUser = async (
	fname: string,
	lname: string,
	password: string,
	email: string,
	avatar?: string,
) => {
	try {
		let newUser = {
			fname,
			lname,
			password,
			avatar,
			email,
		}
		const user = await UserModel.create(newUser)
		return user
	} catch (error) {
		return error
	}
}

export const queryAllUsers = async () => {
	try {
		const allUsers = UserModel.find()
		return allUsers
	} catch (error) {
		return error
	}
}

export const queryUser = async (userEmail: string) => {
	try {
		const user = await UserModel.findOne({email: userEmail})
		return user
	} catch (error) {
		return error
	}
}

export const updateUser = async (newUser: User) => {
	try {
		const updatedUser = await UserModel.findOneAndUpdate(
			{email: newUser.email},
			newUser,
			{
				new: true,
			},
		)
		return updatedUser
	} catch (error) {
		return error
	}
}

export const removeUser = async (userEmail: string) => {
	try {
		return await UserModel.findOneAndDelete({email: userEmail})
	} catch (error) {
		return error
	}
}
