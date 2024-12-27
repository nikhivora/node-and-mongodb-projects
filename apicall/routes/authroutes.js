const express=require('express')
const { loginuser } = require('../controller/authcontroller')


const routes=express.Router()


routes.post('/login',loginuser)


module.exports=routes