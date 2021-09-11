const express = require('express');
const controller = express.Router();
const manager = require("./dsm-press-release.manager");

controller.get('/', (req, res) => {
    manager.getAll()
        .then((items) => {
            res.send(items);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

// save batch

// get one

// get most recent batch

// delete one

module.exports = controller;
