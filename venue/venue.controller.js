const express = require('express');
const controller = express.Router();
const manager = require("./venue.manager");
const authUtil = require('../utilities/auth.util');

controller.get('/', (req, res) => {
    manager.getAll()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/:id', (req, res) => {
    const id = req.params.id;
    manager.getById(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const item = req.body;
    manager.add(item)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.delete('/:id', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
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

controller.put('/', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const item = req.body;
    manager.edit(item)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

module.exports = controller;
