const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares')

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// connecting to DB
connectDB()

// routes
app.use('/', userRoutes)

// error handlers
app.use(notFound)
app.use(errorHandler)

// listening apps
app.listen(port, () => {
  console.log(`server is running on https://localhost:${port}`)
})
