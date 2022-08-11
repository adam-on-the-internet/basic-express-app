const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaintextAgendaSchema = new Schema({
  agenda_code: {
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

mongoose.model('plaintextAgenda', PlaintextAgendaSchema);
