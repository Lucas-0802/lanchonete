const router = require('express').Router()
const ProductsController = require('../controllers/products')
const ClientController = require('../controllers/client')
const OrderController = require('../controllers/order')

//Produtos
router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.delete('/products/:id', ProductsController.remove)

//Clientes
router.get('/client/:id?', ClientController.get)
router.post('/client', ClientController.post)
router.delete('/client/:id', ClientController.remove)

//Pedidos
router.get('/order/:id?', OrderController.get)
router.post('/order', OrderController.post)
router.delete('/order/:id', OrderController.remove)

module.exports =  router