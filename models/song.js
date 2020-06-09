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
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    song: {
        url: String,
        key: String
    },
    content: {
        type: {},
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Song', songSchema)