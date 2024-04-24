const express = require('express')
const app = express()
const auth = require('./routes/auth')
const people = require('./routes/people')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/login', auth)
app.use('/api/people', people)

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5001, (req, res) => {
  console.log('server is listening on port 5001...')
})
