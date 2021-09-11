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

controller.get('/recent', (req, res) => {
    manager.getRecent()
        .then((items) => {
            res.send(items);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/:id', (req, res) => {
    const id = req.params.id;
    manager.getOne(id)
        .then((items) => {
            res.send(items);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/', (req, res) => {
    const items = req.body;
    manager.addBatch(items)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.delete('/:id', (req, res) => {
    const id = req.params.id;
    manager.deleteOne(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

module.exports = controller;
