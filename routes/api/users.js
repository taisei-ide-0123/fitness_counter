const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

const cloudinary = require('../../utils/cloudinary')
const upload = require('../../utils/multer')

// Load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// Load User model
const User = require('../../models/User')

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body)

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  // 有効な入力の場合は、MongoDBを使用してユーザーがすでに存在するかどうかを確認する。
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' })
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })

      // データベースを保存するためにパスワードをハッシュする
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err))
        })
      })
    }
  })
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body)

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' })
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched

        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          birthday: user.birthday,
          img: user.img,
          total_squat_count: user.total_squat_count,
        }

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            })
          },
        )
      } else {
        return res.status(400).json({ passwordincorrect: 'Password incorrect' })
      }
    })
  })
})

// Profile
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').put(upload.single('image'), (req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then(async (user) => {
      user.name = req.body.name
      user.email = req.body.email
      user.birthday = req.body.birthday
      // console.log(req.body)

      // Delete image from cloudinary
      await cloudinary.uploader.destroy(user.cloudinary_id)

      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(
        req.body.img,
        {
          folder: 'Fithabit',
        },
        function (error, result) {
          // console.log(result, error)
        },
      )
      // console.log(result)

      user.img = result.secure_url
      user.cloudinary_id = result.public_id

      user
        .save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// TOTAL SQUAT COUNT UPDATE
router.route('/total/squat/count/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      // console.log(user)
      user.total_squat_count = req.body.total_squat_count
      // console.log(req.body)
      user
        .save()
        .then(() => res.json('Total squat count updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// TOTAL PUSH UP COUNT UPDATE
router.route('/total/push-up/count/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      // console.log(user)
      user.total_push_up_count = req.body.total_push_up_count
      // console.log(req.body)
      user
        .save()
        .then(() => res.json('Total push count updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// TOTAL PULL UP COUNT UPDATE
router.route('/total/pull-up/count/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      // console.log(user)
      user.total_pull_up_count = req.body.total_pull_up_count
      // console.log(req.body)
      user
        .save()
        .then(() => res.json('Total pull up count updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// TOTAL ARM CURL COUNT UPDATE
router.route('/total/arm-curl/count/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      // console.log(user)
      user.total_arm_curl_count = req.body.total_arm_curl_count
      // console.log(req.body)
      user
        .save()
        .then(() => res.json('Total arm curl count updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// TOTAL DUMBBELL RAISE COUNT UPDATE
router.route('/total/dumbbell-raise/count/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      // console.log(user)
      user.total_dumbbell_raise_count = req.body.total_dumbbell_raise_count
      // console.log(req.body)
      user
        .save()
        .then(() => res.json('Total dumbbell raise count updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

// SQUAT RANKING
router.route('/squat/ranking/').get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
