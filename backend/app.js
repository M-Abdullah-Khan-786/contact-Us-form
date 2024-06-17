const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: "./config/.env" })
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require("morgan")


const connectdb = require("./database/connectdb")
const { errorMiddleware } = require('./middleware/errorMiddleware')
const contactRouter = require("./routes/contactRouter")

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    Credential: true
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(cors(corsOptions))

app.use("/api/v1", contactRouter)

connectdb()

app.use(errorMiddleware)

module.exports = app