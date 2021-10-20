const bcrypt = require('bcryptjs')

const matchPassword = async (password, savedPassword) => {
  return bcrypt.compare(password, savedPassword)
}

module.exports = matchPassword
