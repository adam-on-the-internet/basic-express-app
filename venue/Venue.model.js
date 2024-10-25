const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VenueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('venue', VenueSchema);
