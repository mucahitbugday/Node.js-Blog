const mongoose = require('mongoose')
const Shema = mongoose.Schema

const blogSchema = new Shema({
    title: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
    },
    long: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog
