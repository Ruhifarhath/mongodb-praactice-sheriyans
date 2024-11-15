const mongoose = require('mongoose')
//database 
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)

//schema define karna
const userSchema= mongoose.Schema({
    name:String,
    username:String,
    emai:String
})

//model create karne se collection create hota hai // user's plural form me create hota collection
// and isko different routes pe jakar CRUD karne export karna zaroori hai
module.exports= mongoose.model("user",userSchema)
