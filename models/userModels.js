const mongoose = require("mongoose")
const password = require("passport-local-mongoose")


const userSchema = new mongoose.Schema({
    userName: String,
    userPass: String
})

userSchema.plugin(password)

module.export = mongoose.export("User", userSchema)
