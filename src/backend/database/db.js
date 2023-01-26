const mongoose = require('mongoose')


function connect() {
    //mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifieldTopology', true)
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://localhost:27017/lanchonete')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    connect
}