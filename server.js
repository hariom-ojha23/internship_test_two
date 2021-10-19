import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(port, () => {
  console.log(`server is running on port https://localhost:${port}`)
})
