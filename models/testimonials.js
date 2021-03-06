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
    website: {
        type: String,
        trim: true,
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
        type: String,
        trim: true,
        maxlength: 250
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
        type: String,
        default: -1,
    },
    scale: {
        type: String,
        default: 1,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Testimonial', testimonialSchema)