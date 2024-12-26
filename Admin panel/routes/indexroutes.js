const express=require('express')

const routes=express.Router()

routes.use('/', require('../routes/authrotes'))
routes.use('/category', require('./categoryroutes'))
routes.use('/subcategory', require('./subcatrgoryroutes'))
routes.use('/exsubcategory', require('./exsubcategoryroutes'))
routes.use('/product', require('./productroutes'))

module.exports=routes