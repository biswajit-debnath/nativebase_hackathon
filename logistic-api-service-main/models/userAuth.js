const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    authCode: {
        required: true,
        type: Number
    },
    expiry: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('userAuth', dataSchema);