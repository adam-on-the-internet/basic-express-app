const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('application', ApplicationSchema);