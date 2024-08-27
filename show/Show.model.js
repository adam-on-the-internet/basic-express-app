const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    showDate: {
        type: Date,
        required: true
    },
    doorDate: {
        type: Date,
        required: false
    },
    venue: {
        type: String,
        required: true
    },
    showDetailsURL: {
        type: String,
        required: false
    },
    ageLimit: {
        type: String,
        required: false
    },
    ticketPrice: {
        type: String,
        required: false
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('show', ShowSchema);
