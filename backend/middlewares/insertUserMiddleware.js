const db = require('../models')
const asyncHandler = require('express-async-handler')

const insertMiddleware = asyncHandler(async (req, res, next) => {
  const userExist = await db.User.findOne({
    where: { user_email: req.body.user_email },
  }).catch((error) => console.log(`Error: ${error.message}`))

  if (userExist) {
    res.status(400)
    throw new Error('User with this email already registered')
  } else {
    next()
  }
})

module.exports = insertMiddleware
