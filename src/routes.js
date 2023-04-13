const { Router } = require('express')

const { createcart, hello2 } = require('./controllers')

const routes = Router()

routes.post('/cart', createcart)

routes.get('/hello2', hello2)

module.exports = routes 