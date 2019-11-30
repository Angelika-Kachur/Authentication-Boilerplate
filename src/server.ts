import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
//const express = require('express') for vanilla
import bodyParser from 'body-parser'
import initPassport from './services/passport/passport'
import userRouter from './resources/User/user.router'
import authRouter from './resources/Auth/auth.router'
const app = express()
app.use(bodyParser.urlencoded({extended: true}))

initPassport()

app.get('/', (req, res) => {
	return res.status(200).json({message: 'success'})
})
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.get('/test')

export default app
