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
        type: Number
    },
    vehicleTypeId: {
        required: true,
        type: String
    },
    vehicleNo: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('carriers', dataSchema);