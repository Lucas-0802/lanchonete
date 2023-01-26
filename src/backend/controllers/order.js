const OrderModel = require('../models/order')

async function get(req, res) {

    const {id} = req.params

    const obj = id ? { _id: id} : null

    const order = await OrderModel.find(obj)

    res.send(order)
}

async function post(req, res) {
    const {
         codigoCliente,
         codigoProduto,
         dataCriacao,
         status,
    } = req.body

    const order = new OrderModel({
        codigoCliente,
         codigoProduto,
         dataCriacao,
         status,
    })

    order.save()

    res.send({
        message: 'sucess'
    })
}

async function remove(req, res) {
    const {id} = req.params
    const remove = await OrderModel.deleteOne({_id: id})

     const message = remove.deletedCount > 0 ? 'sucess' : 'error'
    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    remove,
}