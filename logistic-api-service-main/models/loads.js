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
    max_amount: {
        required: true,
        type: Number
    },
    isActive: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('loads', dataSchema);