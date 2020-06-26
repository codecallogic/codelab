const { modelName } = require("./music");

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testimonialSchema = new Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        max: 32
    },
    company: {
        type: String,
        trim: true,
        max: 32
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    heading: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: {},
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    image: {
        url: String,
        key: String
    },
    status: {
        type: Boolean,
        default: false,
    },
    Yaxis: {
        type: String
    },
    scale: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Testimonial', testimonialSchema)