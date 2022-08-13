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

  links: [
    {
      type: String
    }
  ],
  intro_text: {
    type: String,
    required: true,
  },
  item_text: {
    type: String,
    required: false,
  },
  closing_text: {
    type: String,
    required: false,
  },

  version: {
    type: Number,
    required: true,
  },

  checked: {
    type: Boolean,
    default: false,
  },
  check_message: {
    type: String,
    default: "",
  },
  check_message_log: [
    {
      type: String
    }
  ],
  found_date: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('agendaVersion', AgendaVersionSchema);
