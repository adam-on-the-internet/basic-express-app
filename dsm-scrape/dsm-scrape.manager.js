const mongoose = require('mongoose');
require('./NewsPost.model');
const NewsPost = mongoose.model('newsPost');

function getAllNewsPosts() {
    return new Promise((resolve, reject) => {
        NewsPost.find({})
            .then((items) => {
                resolve(items);
            });
    });
}

function saveNewsPost(newsPost) {
    return new Promise((resolve, reject) => {
        new NewsPost({
            heading_title: newsPost.heading_title,
            heading_url: newsPost.heading_url,
            page_url: newsPost.page_url,
            page_content: newsPost.page_content,
            page_title: newsPost.page_title,
            heading_date: newsPost.heading_date,
        })
            .save()
            .then((item) => {
                resolve(item);
            });
    });
}

module.exports = {
    saveNewsPost,
    getAllNewsPosts,
}
