const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = new Schema(
{
    recentlyPlayed: {
        type: Array,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Music', musicSchema)