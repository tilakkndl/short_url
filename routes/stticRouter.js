const express = require("express")

const router = express.Router()
 router.get('/', (re, res)=>{
    res.render("home")
 })

module.exports = router