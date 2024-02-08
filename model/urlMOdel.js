const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({

    shortId:{
        type: String,
        required: true,
        unique: true
    },
    fullId: {
        type: String,
        required: true
    },
    history: {timestamp: [{type: Number}]}},
    {timestamps: true}

)


const URL = new mongoose.model("url", urlSchema)

module.exports = URL

