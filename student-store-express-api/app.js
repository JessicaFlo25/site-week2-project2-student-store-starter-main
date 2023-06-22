const express = require('express')
const cors = require('cors')
const storeRouter = require('./routes/storeRoutes')
const app = express()


app.use(express.json())

app.use(cors())

app.get("/",(req,res) =>  {
    res.status(200).json({ "ping": "pong" })
})

app.use("/store", storeRouter)

module.exports = app

