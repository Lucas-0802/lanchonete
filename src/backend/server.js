const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/index')
const app = express()

//conexão com o banco de dados
db.connect()

//habilita CORS
app.use(cors())

//habilita server pra receber dados json teste
app.use(express.json())

//definindo rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))