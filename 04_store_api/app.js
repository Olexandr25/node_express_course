require('dotenv').config()
require('express-async-errors')
const express = require('express')
const notFoundMiddleware = require('./middleware/not-found.js')
const errorMiddleware = require('./middleware/error-handler.js')
const connectDB = require('./db/connect.js')
const productsRouter = require('./routes/products.js')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">products</a>')
})

app.use('/api/v1/products', productsRouter)

// Products
app.use(notFoundMiddleware) // 404 middleware
app.use(errorMiddleware) // error handling middleware

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
