const mongoose = require('mongoose')

const moneySchema = new mongoose.Schema({
  country: { type: String, required: true},
  value: {type: String, required: true},
  year: {type: Number, required: true},
  materials: [{ type: String, required: true}]


})

const Money = mongoose.model('Money', moneySchema)


module.exports = Money
