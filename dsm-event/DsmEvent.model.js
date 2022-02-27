const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DsmEventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    discovery: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: false,
    },
    duration: {
        type: String,
        required: false,
    },
    detail: {
        type: String,
        required: false,
    },
    contactName: {
        type: String,
        required: false,
    },
    contactEmail: {
        type: String,
        required: false,
    },
    contactPhone: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    }
});

mongoose.model('dsmEvent', DsmEventSchema);
