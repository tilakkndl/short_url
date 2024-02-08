const app = require("./app")
const url = "mongodb://localhost:27017/short-url"
const {connectToMongoose} = require("./connect")
connectToMongoose(url)
app.listen(8000, ()=>console.log("Running server"))
