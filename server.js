const express = require('express')
const app = express()
const dotenv= require('dotenv')
const index = require('./routers/index')
const {connectDatabse} = require('./model/database')


app.use(express.json())
dotenv.config({
    path:'./config/.env'
})
//database
connectDatabse()
//server
const port = process.env.port
app.listen(port,() => console.log(`app started on port:${port}`))
//router
app.use('/',index)
