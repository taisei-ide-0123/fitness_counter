const express = require('express')
const router = express.Router()

// Load Count model
const Count = require('../../models/Count')

router.route('/:id').get((req, res) => {
  Count.find({ user: req.params.id })
    .then((count) => res.json(count))
    .catch((err) => res.status(400).json('Error: ' + err))
  // console.log(req.params.id)
})

router.route('/add/:id').post((req, res) => {
  const user = req.body.user
  const event = req.body.event
  const count = Number(req.body.count)

  const newCount = new Count({
    user,
    event,
    count,
  })

  newCount
    .save()
    .then(() => res.json('Count added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
