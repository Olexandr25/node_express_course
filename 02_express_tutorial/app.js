const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('Please provide credentials')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5001, (req, res) => {
  console.log('server is listening on port 5001...')
})
