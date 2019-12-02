import {Router} from 'express'
// import passport from 'passport'
import * as authController from './auth.controller'

const router = Router()

router.route('/signup').post(authController.signup)

export default router
