const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WitnessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('witness', WitnessSchema);