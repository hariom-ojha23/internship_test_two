const express = require('express')
const router = express.Router()
const {
  getUsers,
  getSpecificUser,
  insertUser,
  updateUser,
} = require('../controllers/userControllers')

router.route('/users').get(getUsers)
router.route('/details/:id').get(getSpecificUser)
router.route('/insert').post(insertUser)
router.route('/update').put(updateUser)

module.exports = router
