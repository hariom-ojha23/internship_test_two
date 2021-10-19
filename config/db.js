const db = require('../models')

const connectDB = async () => {
  try {
    await db.sequelize.sync()
    console.log('database connected !')
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
