const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendaVersionSchema = new Schema({
  meeting_code: {
    type: String,
    required: true,
  },
  plaintext: {
    type: String,
    required: true,
  },
  found_date: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('agendaVersion', AgendaVersionSchema);
