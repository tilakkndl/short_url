const express = require("express")
const morgan = require("morgan")

const urlRouter = require('./routes/urlRoutes')

const app = express()



//morgan middlwware
app.use(morgan('dev'))

app.use(express.json())



// app.use("/", (req, res)=>{
//     res.json(200).json({message: "ok"})
// })

app.use("/api", urlRouter)

module.exports = app;
