const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CountSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  event: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Count = mongoose.model('counts', CountSchema)
