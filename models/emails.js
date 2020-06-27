const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emailSchema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Email', emailSchema)