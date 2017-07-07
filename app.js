const express = require('express')
const mustache = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const homeRoutes = require('./routes/home')
const moneyRoutes = require('./routes/money')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/money')
app.engine('mustache', mustache())
app.set("view engine", 'mustache')
app.set("layout", 'layout')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(homeRoutes)
app.use(moneyRoutes)


app.listen(3000, function(){
  console.log('GOOD TO GO!!!!');
})
