const mongoose = require('mongoose')
const Shema = mongoose.Schema

const homeSchema = new Shema({
    home_title: {
        type: String,
        required: true
    },
    home_description: {
        type: String,
        required: true
    },
})

const Home = mongoose.model('Home',homeSchema)
module.exports = Home
