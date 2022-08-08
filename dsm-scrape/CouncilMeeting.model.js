const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouncilMeetingSchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  links: [
    {
      type: String
    }
  ],
  time: {
    type: String,
    required: false,
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

mongoose.model('councilMeeting', CouncilMeetingSchema);
