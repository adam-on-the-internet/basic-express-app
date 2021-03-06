const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  order: {
    type: Number,
    required: false,
    default: 99
  },
  date: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('bookmark', BookmarkSchema);