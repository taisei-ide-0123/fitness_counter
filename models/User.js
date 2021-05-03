const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  birthday: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  total_squat_count: {
    type: Number,
    default: 0,
  },
  total_push_up_count: {
    type: Number,
    default: 0,
  },
  total_pull_up_count: {
    type: Number,
    default: 0,
  },
  total_arm_curl_count: {
    type: Number,
    default: 0,
  },
  total_dumbbell_raise_count: {
    type: Number,
    default: 0,
  },
})

module.exports = User = mongoose.model('users', UserSchema)
