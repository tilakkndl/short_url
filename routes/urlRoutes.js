const express = require("express")
const {generateShortId, redirectUrl} = require("./../controller/urlController")
const router = express.Router()

router.post("/url", generateShortId)
router.get("/url/:id", redirectUrl)

module.exports = router