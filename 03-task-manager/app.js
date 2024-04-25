const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()
const notFound = require('./middleware/notFound.js')
const errorHandler = require('./middleware/errorHandler.js')

app.use(express.static('./public')) // middleware to serve static files
app.use(express.json()) // middleware to parse JSON data

// routes
app.use('/api/v1/tasks', tasks) // use tasks router
app.use(notFound) // 404 route
app.use(errorHandler) // error handler

const port = 3000

// Connect to MongoDB
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
