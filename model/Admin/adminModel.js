const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("admins", AdminSchema);