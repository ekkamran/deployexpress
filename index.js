const express = require('express')
const dotenv = require('dotenv')

const product = require('./api/product')

dotenv.config()

const app = express()

app.use('/api/product', product)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server runing in port ${PORT}`))
