const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    number: {
        required: true,
        type: Number,
        unique : true
    }
})

module.exports = mongoose.model('users', dataSchema);