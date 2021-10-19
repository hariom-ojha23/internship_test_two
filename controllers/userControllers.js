const db = require('../models')
const asyncHandler = require('express-async-handler')

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

// @desc Add a new user
// @access private
// @route POST/insert
const insertUser = asyncHandler(async (req, res) => {
  const user_details = {
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_image: req.body.user_image,
    last_logged_in: req.body.last_logged_in,
    total_orders: req.body.total_orders,
  }

  const userExist = await db.User.findOne({
    user_email: req.body.user_email,
  }).catch((error) => console.log(`Error: ${error.message}`))

  if (userExist) {
    return res.status(400).json({ Error: 'This user already exist' })
  }

  await db.User.create(user_details)
    .then(() => {
      res.status(201).send('User inserted successfully !')
    })
    .catch((error) => console.log(`Error: ${error.message}`))
})

// @desc Update user details
// @access private
// @route PUT/update
const updateUser = asyncHandler(async (req, res) => {
  const user_id = req.body.user_id
  const new_details = {
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_image: req.body.user_image,
  }
  const emailExist = await db.User.findOne({
    user_email: req.body.user_email,
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

module.exports = { getUsers, getSpecificUser, insertUser, updateUser }
