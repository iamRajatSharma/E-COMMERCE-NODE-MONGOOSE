const mongoose = require("mongoose")

const courses = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lecture: {
        type: Number,
        required: true
    },
    quiz: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    skill_level: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    students: {
        type: String,
        requiresd: true
    },
    assesments: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    selling_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    outcomes: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    creator_email: {
        type: String,
        required: true
    },
    review: [{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model("courses", courses)