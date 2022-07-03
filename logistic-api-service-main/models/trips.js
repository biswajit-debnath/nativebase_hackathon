const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
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
    from: {
        required: true,
        type: String
    },
    to: {
        required: true,
        type: String
    },
    prod_type: {
        required: true,
        type: String
    },
    weight: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    load_id: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('trips', dataSchema);