const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    stationId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        default: 'PM2.5'
    },
    measuredAt: {
        type: Date,
        default: Date.now
    }
});

const Measurement = mongoose.model('Measurement', measurementSchema);

module.exports = Measurement;