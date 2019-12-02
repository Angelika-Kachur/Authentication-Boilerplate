import mongoose, {Document} from 'mongoose'
import {User} from './user.interface'
//this interface use only in only this file, so can create it here instead interface file
import bcrypt from 'bcryptjs'
export interface UserDocument extends Document, User {
	checkPassword: (password: string) => boolean
}

const userSchema = new mongoose.Schema({
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: String,
})

// let asdUser = new UserModule()
// asdUsder = {
// 	sdsd
// }
// asdUser.save()

const User = mongoose.model('User', userSchema)
//this is just a layer

userSchema.pre<UserDocument>('save', function(next) {
	if (!this.isModified('password')) {
		//!!!!!!! important password - but if we have nested it can be something like 'auth password' with parent name from the model
		return next()
	}

	//and install it npm package
	const salt = bcrypt.genSaltSync(10)
	this.password = bcrypt.hashSync(this.password, salt)
	//this contects about to be save in DB
	//inside the object (the same object where you are inside)
})

//our user is UserDocument

userSchema.methods.checkPassword = function(plainPassword: string) {
	//we have to exctract the password
	const hashPassword = this.password
	return bcrypt.compare(plainPassword, hashPassword)
}

export default User
