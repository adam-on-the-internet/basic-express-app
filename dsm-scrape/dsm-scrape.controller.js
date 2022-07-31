const express = require('express');
const controller = express.Router();
const manager = require("./dsm-scrape.manager");

controller.get('/newsPost', (req, res) => {
    manager.getAllNewsPosts()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/newsPost', (req, res) => {
    const newsPost = req.body;
    manager.saveNewsPost(newsPost)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

module.exports = controller;
