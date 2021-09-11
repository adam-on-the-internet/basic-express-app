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
});

mongoose.model('dsmEvent', DsmEventSchema);
