const express=require('express')

const routes=express.Router()

const { admin, verifyToken } = require('../Midalware/Auth')
const { allPost, allcommnet } = require('../controller/admincotroller')

routes.get('/allpost',verifyToken,admin,allPost)
routes.get('/allcommnet',verifyToken,admin,allcommnet)

module.exports=routes