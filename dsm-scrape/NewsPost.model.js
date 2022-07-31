const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsPostSchema = new Schema({
  heading_title: {
    type: String,
    required: true,
  },
  heading_url: {
    type: String,
    required: true,
  },
  page_url: {
    type: String,
    required: true,
  },
  page_content: {
    type: String,
    required: false,
  },
  page_title: {
    type: String,
    required: false,
  },
  heading_date: {
    type: String,
    required: false,
  },
  found_date: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('newsPost', NewsPostSchema);
