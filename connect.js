const mongoose = require("mongoose")
exports.connectToMongoose = (url)=>{
mongoose.connect(url);

}