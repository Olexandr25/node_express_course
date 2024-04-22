const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./navbar-app'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5001, (req, res) => {
  console.log('server is listening on port 5001...')
})
