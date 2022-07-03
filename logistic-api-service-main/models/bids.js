const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    load_id: {
        required: true,
        type: String
    },
    user_id: {
        required: true,
        type: String
    },
    carrier_id: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('bids', dataSchema);