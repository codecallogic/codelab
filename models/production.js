const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        max: 32
    },
    content: {
        type: {},
    },
    url: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    song: {
        url: String,
        key: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Song', songSchema)