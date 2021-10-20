const db = require('../models')
const asyncHandler = require('express-async-handler')
const matchPassword = require('../utils/matchPassword')
const generateToken = require('../utils/generateToken')
const hashPassword = require('../utils/hashPassword')

// @desc Fetch all users
// @access Public
// @route GET/
const getUsers = asyncHandler(async (req, res) => {
  await db.User.findAll()
    .then((users) => res.json(users))
    .catch((error) => {
      console.log(error.message)
    })
})

// @desc Fetch secific user by id
// @access Public
// @route GET/details/:user_id
const getSpecificUser = asyncHandler(async (req, res) => {
  const id = req.params.id
  await db.User.findByPk(id)
    .then((user) => res.json(user))
    .catch((error) => console.log(error))
})

// @desc Fetch image of Specific User
// @access Public
// @route GET/image/:user_id
const getImage = asyncHandler(async (req, res) => {
  const id = req.params.id
  await db.User.findByPk(id)
    .then((user) => res.json(user.dataValues.user_image))
    .catch((error) => console.log(error))
})

// @desc Login user
// @access public
// @route POST/login
const loginUser = asyncHandler(async (req, res) => {
  const { user_email, user_password } = req.body
  const user = await db.User.findOne({ where: { user_email } }).catch((error) =>
    console.log(`Error: ${error.message}`)
  )
  const date = Date().split(' ').slice(0, 5).join(' ')

  if (user && (await matchPassword(user_password, user.user_password))) {
    await db.User.update(
      { last_logged_in: date },
      { where: { user_id: user.dataValues.user_id } }
    )

    res.json({
      user: user.dataValues,
      token: generateToken(user.user_id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid Email or Password')
  }
})

// @desc Add a new user
// @access private
// @route POST/insert
const insertUser = asyncHandler(async (req, res) => {
  let user_details = {}
  const date = Date().split(' ').slice(0, 5).join(' ')
  await hashPassword(req.body.user_password)
    .then((pass) => {
      user_details = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: pass,
        user_image: req.body.user_image,
        last_logged_in: date,
        total_orders: req.body.total_orders,
      }
    })
    .catch((error) => console.log(`Error: ${error.message}`))

  const userExist = await db.User.findOne({
    where: { user_email: req.body.user_email },
  }).catch((error) => console.log(`Error: ${error.message}`))

  if (userExist) {
    return res
      .status(400)
      .json({ Error: 'A user with this email already registered' })
  }

  await db.User.create(user_details)
    .then((user) => {
      res.status(201)
      res.json({
        user: user.dataValues,
        token: generateToken(user.user_id),
      })
    })
    .catch((error) => console.log(`Error: ${error.message}`))
})

// @desc Update user details
// @access private
// @route PUT/update
const updateUser = asyncHandler(async (req, res) => {
  const user_id = req.body.user_id
  let new_details = {}
  await hashPassword(req.body.user_password).then((pass) => {
    new_details = {
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: pass,
      user_image: req.body.user_image,
    }
  })

  const emailExist = await db.User.findOne({
    where: { user_email: req.body.user_email },
  }).catch((error) => console.log(`Error: ${error.message}`))

  if (emailExist) {
    return res.status(400).json({ Error: 'This email is already registered' })
  }

  await db.User.update(new_details, { where: { user_id } })
    .then(() => {
      res.status(201).send('Details updated successfully !')
    })
    .catch((error) => console.log(`Error: ${error.message}`))
})

// @desc Delete specific user
// @access private
// @route DELETE/delete/:id
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id
  await db.User.destroy({ where: { user_id: id } })
    .then(() => {
      res.json('User deleted successfully')
    })
    .catch((error) => console.log(`Error: ${error.message}`))
})

module.exports = {
  getUsers,
  getSpecificUser,
  insertUser,
  updateUser,
  loginUser,
  getImage,
  deleteUser,
}
