import passport from 'passport'
import localStrategy from 'passport-local'
import {queryUser} from './passport.service'

const LocalStrategy = localStrategy.Strategy

const initPassport = () => {
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'email',
			},
			async (email, password, done) => {
				try {
					//all logic
					//using the email we query database
					//take email and get the user
					//compare our encrypted pass with hiw uncrtypted
					//we can use mongoose for it
					const user = await queryUser(email)
					if (!user) {
						return done('User not found', false)
					}
					if (user.checkPassword(password)) {
						///remember to delete password property in the user variable
						return done(null, user)
					} else {
						return done('Password mistmatched', false)
					}
					//user.cryptUserPassword
				} catch (error) {
					done(error)
				}
			},
		),
	)
}

export default initPassport

// done(null, user) => next() + user to the next layer
// done('error message or object', false) => res.status(401).json({message: 'unAuthorized'})
