const ClientModel = require('../models/client')

async function get(req, res) {

    const {id} = req.params

    const obj = id ? { _id: id} : null

    const client = await ClientModel.find(obj)

    res.send(client)
}

async function post(req, res) {
    const {
        name,
        email,
        fone,
        address,
    } = req.body

    const client = new ClientModel({
        name,
        email,
        fone,
        address,
    })

    client.save()

    res.send({
        message: 'sucess'
    })
}

async function remove(req, res) {
    const {id} = req.params
    const remove = await ClientModel.deleteOne({_id: id})

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