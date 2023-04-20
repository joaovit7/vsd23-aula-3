const { Router } = require('express')

const { createcart, getlistofcart , createusercart } = require('./controllers')

const routes = Router()

routes.post('/cart', createcart)

routes.get('/cart', getlistofcart)

routes.post('/cart/user-cart',createusercart) 

module.exports = routes 