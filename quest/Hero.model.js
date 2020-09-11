const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Gribnar Bleck"
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    hp: {
        type: Number,
        required: true,
        default: 100
    },
    hpMax: {
        type: Number,
        required: true,
        default: 100
    },
    strength: {
        type: Number,
        required: true,
        default: 5
    },
    wisdom: {
        type: Number,
        required: true,
        default: 5
    },
    charisma: {
        type: Number,
        required: true,
        default: 5
    },
    dexterity: {
        type: Number,
        required: true,
        default: 5
    },
    level: {
        type: Number,
        required: true,
        default: 1
    },
    backstory: {
        type: String,
        required: true,
        default: "They are the king's secret child."
    },
    specialAbility: {
        type: String,
        required: true,
        default: "BLESSED"
    },
    specialWeakness: {
        type: String,
        required: true,
        default: "CURSED"
    },
    item: {
        type: String,
    },
    ally: {
        type: String,
    },
    journal: [
        {
            type: String
        }
    ],
    startDate: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('hero', HeroSchema);
