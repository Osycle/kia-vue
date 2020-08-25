const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI)
  .then(() => console.log('MongoDB Conntected ...'))
  .catch(error => console.error("Пиздец"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


module.exports = app