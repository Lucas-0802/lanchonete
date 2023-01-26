const ProductsModel = require('../models/products')

async function get(req, res) {

    const {id} = req.params

    const obj = id ? { _id: id} : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'sucess'
    })
}

async function remove(req, res) {
    const {id} = req.params
    const remove = await ProductsModel.deleteOne({_id: id})

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