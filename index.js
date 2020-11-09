const express = require('express')
const app = express()
const courses_api = require('./api/courses')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4000

//using middlewares
app.use('/', courses_api)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('CRUD API')
})
app.listen(PORT, () => {
  console.log(`server is up and running `)
})
