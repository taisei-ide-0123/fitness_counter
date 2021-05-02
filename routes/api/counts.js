const express = require('express')
const router = express.Router()

// Load Count model
const Count = require('../../models/Count')

router.route('/:id').post((req, res) => {
  const user = req.params.user
  const event = req.body.event
  const count = Number(req.body.count)
  const date = Date.parse(req.body.date)

  const newCount = new count({
    user,
    event,
    count,
    date,
  })

  newCount
    .save()
    .then(() => res.json('Count added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})