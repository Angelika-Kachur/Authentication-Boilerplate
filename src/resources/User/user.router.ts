//router and the app is the same
//router.get('/', getAllUsers)

// router.route('/:id').get((req, res) => {
// 	res.status(200).json({parthparams: req.params.id, queryparam: req.query.id})
// })
//it will now that after this slash this is id
//there is two ways to get the parameters

//we shoud use id instead of email

import Router from 'express'
//import passport from 'passport'

import {getAllUsers, getUser, putUser, deleteUser} from './user.controller'
const router = Router()

router.route('/').get(getAllUsers)

router.route('/:email').get(getUser)

router.route('/').put(putUser)

router.route('/:email').delete(deleteUser)
//router.route('/:email').delete(passport.authenticate('localStrategy', deleteUser))

export default router
