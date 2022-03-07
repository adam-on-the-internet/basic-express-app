const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TunnelGoonSchema = new Schema({
    characterName: {
        type: String,
        required: true,
    },
    playerName: {
        type: String,
        required: false,
    },
    portraitURL: {
        type: String,
        required: false,
    },
    level: {
        type: Number,
        required: true,
    },
    brute: {
        type: Number,
        required: true,
    },
    skulker: {
        type: Number,
        required: true,
    },
    erudite: {
        type: Number,
        required: true,
    },
    maxHealthPoints: {
        type: Number,
        required: true,
    },
    currentHealthPoints: {
        type: Number,
        required: true,
    },
    maxInventoryScore: {
        type: Number,
        required: true,
    },
    items: [
        {
            type: String
        }
    ],
    traits: [
        {
            type: String
        }
    ],
    notes: [
        {
            type: String
        }
    ],
    isPrivate: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('tunnelGoon', TunnelGoonSchema);
