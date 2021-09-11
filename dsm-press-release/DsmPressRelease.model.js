const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DsmPressReleaseSchema = new Schema({
    URL: {
        type: String,
        required: true,
    },
    discovery: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false,
    },
});

mongoose.model('dsmPressRelease', DsmPressReleaseSchema);
