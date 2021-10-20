const express = require('express')
const router = express.Router()
const {
  getUsers,
  getSpecificUser,
  insertUser,
  updateUser,
  loginUser,
  getImage,
  deleteUser,
} = require('../controllers/userControllers')
const protect = require('../middlewares/updateMiddleware')
const insertMiddleware = require('../middlewares/insertUserMiddleware')

router.route('/users').get(getUsers)
router.route('/details/:id').get(getSpecificUser)
router.route('/image/:id').get(getImage)
router.route('/insert').post(insertMiddleware, insertUser)
router.route('/login').post(loginUser)
router.route('/update').put(protect, updateUser)
router.route('/delete/:id').delete(deleteUser)

module.exports = router
