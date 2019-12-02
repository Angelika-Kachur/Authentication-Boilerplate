import UserModel from '../User/user.model'
import {User} from '../User/user.interface'
import _ from 'lodash'

export const createUser = async (newUser: User) => {
	try {
		const existingUser = await UserModel.findOne({email: newUser.email})
		console.log(existingUser)
		if (existingUser) {
			return {error: 'email already used'}
		}
		let user = new UserModel()
		user = _.merge(user, newUser)
		await user.save()
		return {success: true, user}
	} catch (error) {
		return error
	}
}
