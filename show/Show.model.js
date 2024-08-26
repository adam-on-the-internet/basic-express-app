const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    },
    showDate: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('show', ShowSchema);
