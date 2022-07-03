const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('cities', dataSchema);