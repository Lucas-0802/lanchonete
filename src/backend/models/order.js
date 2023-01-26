const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    codigoCliente: String,
    codigoProduto: String,
    dataCriacao: Date,
    status: String,
})

const Model = mongoose.model('order', schema)

module.exports = Model