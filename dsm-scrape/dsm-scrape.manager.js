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

function checkNewsPost(newsPostId) {
    return new Promise((resolve, reject) => {
        NewsPost.findOne({_id: newsPostId})
            .then((newsPost) => {
                if (newsPost) {
                    newsPost.checked = true;
                    newsPost.save()
                        .then((updatedNewsPost) => {
                            resolve(updatedNewsPost);
                        });
                } else {
                    reject({
                        message: `Failed to check post.`
                    });
                }
            });
    });
}

function saveNewsPost(newsPost) {
    return new Promise((resolve, reject) => {
        new NewsPost({
            url: newsPost.url,
            heading_title: newsPost.heading_title,
            heading_date: newsPost.heading_date,
            page_title: newsPost.page_title,
            page_content: newsPost.page_content,
            checked: false,
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
    checkNewsPost,
}
