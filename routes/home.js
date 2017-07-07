const express = require('express')
const router = express.Router()
const Money = require('../models/Money')

router.get('/', function(req, res){
  Money.find()
  .sort('country')
  .then(function(money){
    res.render('index',{
      money: money
    })
  })
})

module.exports = router
