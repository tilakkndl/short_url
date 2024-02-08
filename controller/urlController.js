const shortid = require("shortid")
const Url =  require("./../model/urlMOdel")
const shotid = require("shortid")
// const nanoid = require("nanoid")

const generateShortId = async(req, res)=>{
    console.log(req.body)
    const url = req.body.url
    if(!url){
        return res.status(401).json({message: "url is required"})
    }

const shortId = shortid.generate()
// const shortId = nanoid.nanoid(8)
console.log(shortId);

const data = {shortId, fullId: url, history: {timestamp: []}}

const response = await Url.create(data)

return res.status(201).json({
    shortId,
    data: response
})
}

const redirectUrl = async(req, res)=>{
    const id = req.params.id
    console.log(id)

    const shortIdDocument = await Url.find({shortId: id})
    
    // console.log(shortIdDocument)

    const updateUrl = await Url.findOneAndUpdate({shortId: id}, {
        $push: {"history.timestamp": Date.now()}
}, {new: true}
    )
    // console.log(updateUrl)
    // res.status(200).json({message: "Success", updateUrl})
    res.status(301).redirect(updateUrl.fullId)
}

module.exports = { generateShortId, redirectUrl }