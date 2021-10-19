const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// connecting to DB
connectDB()

// listening apps
app.listen(port, () => {
  console.log(`server is running on https://localhost:${port}`)
})
