const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const genericModels = require('../utilities/generic-models.util');

const linkSchema = new Schema(genericModels.linkSchemaDetails);

const AgendaItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    meetingAgendaId: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    cityText: {
        type: String,
        required: true,
    },
    ourText: {
        type: String,
        required: false,
    },
    cityAttachments: [
        {
            type: linkSchema
        }
    ],
    ourLinks: [
        {
            type: linkSchema
        }
    ],
    tags: [
        {
            type: String
        }
    ],
    ourComments: [
        {
            type: String
        }
    ],
    ourPriority: {
        type: Number,
        required: false,
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('agendaItem', AgendaItemSchema);
