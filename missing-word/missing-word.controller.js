const express = require('express');
const controller = express.Router();
const manager = require("./missing-word.manager");

controller.get('/all', (req, res) => {
    manager.getAll()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/draw', (req, res) => {
    manager.drawOne()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/draw2', (req, res) => {
    manager.drawTwo()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

module.exports = controller;
