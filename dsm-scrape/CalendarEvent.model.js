const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarEventSchema = new Schema({
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
  name: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: false,
  },
  detail: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  contact_name: {
    type: String,
    required: false,
  },
  contact_phone: {
    type: String,
    required: false,
  },
  is_notable: {
    type: Boolean,
    default: false,
  },

  checked: {
    type: Boolean,
    default: false,
  },
  found_date: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('calendarEvent', CalendarEventSchema);
