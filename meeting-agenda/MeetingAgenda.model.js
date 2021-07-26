const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const genericModels = require('../utilities/generic-models.util');

const linkSchema = new Schema(genericModels.linkSchemaDetails);

const MeetingAgendaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    links: [
        {
            type: linkSchema
        }
    ],
    tags: [
        {
            type: String
        }
    ],
    highlights: [
        {
            type: String
        }
    ],
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    subtitle: {
        type: String,
        required: false,
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('meetingAgenda', MeetingAgendaSchema);
