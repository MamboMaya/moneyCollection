const express = require('express')
const router = express.Router()
const Money = require('../models/Money')



router.get('/money/new', function(req, res){
  res.render('money/new')
})

router.post('/money', function(req, res){

  var money = new Money()
  money.country = req.body.country
  money.value = req.body.value
  money.year = req.body.year
  money.materials = req.body.materials.split(' ')
  money.save()
  .then(function(money){
    res.redirect('/')
  })
  .catch(function(validationErrors){
    res.render('/money/new', {
      money: money,
      validationErrors: validationErrors
    })
  })
})

router.get('/money/:id/edit', function(req, res){

  Money.findOne({'_id': req.params.id})
  .then(function(money){
    res.render('money/edit', {
      money: money
    })
  })
})

router.post('/money/:id/edit', function(req, res){

  Money.findOne({':id': req.params.id})
  // console.log(req.body)
  .then(function(money){
    // console.log(req)
    money.country = req.body.country
    money.value = req.body.value
    money.year = req.body.year
    money.materials = req.body.materials.split(' ')
    money.save()
    .then(function(money){
      res.redirect('/')
    })
    .catch(function(validationErrors){
      console.log(validationErrors);
      res.render('money/edit', {
        money: money,
        validationErrors: validationErrors
      })
    })
  })
})

router.get('/money/:id/delete', function(req, res){

  Money.findOne({'_id': req.params.id})
  .then(function(money){
    res.render('money/delete', {
      money: money
    })
  })
})

router.post('/money/:id/delete', function(req, res){
  Money.deleteOne({'_id': req.params.id})
  .then(function(money){
    res.redirect('/')
  })
  .catch(function(validationErrors){
    res.render('money/delete', {
      money: money,
      validationErrors: validationErrors
    })
  })
})



module.exports = router
