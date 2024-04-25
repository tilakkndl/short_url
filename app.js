const path = require("path")
const express = require("express")
const morgan = require("morgan")

const urlRouter = require('./routes/urlRoutes')
const Url = require("./model/urlMOdel")
const stticRouter = require("./routes/stticRouter")

const app = express()



//morgan middlwware
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//for view logic
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))



// app.use("/", (req, res)=>{
//     res.json(200).json({message: "ok"})
// })

app.use("/api", urlRouter)
app.use("/test", async(req, res)=>{
    const allUrl = await Url.find({})
    res.render("home", {allUrl})
})

app.use("/", stticRouter)

module.exports = app;
