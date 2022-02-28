const express = require('express');
const controller = express.Router();
const manager = require("./tunnel-goons.manager");
const authUtil = require('../utilities/auth.util');

controller.post('', async (req, res) => {
    try {
        const options = req.body;
        const goon = await manager.makeOne(options);
        res.send(goon);
    } catch (err) {
        res.statusCode = 500;
        res.send(err);
    }
});

controller.get('', async (req, res) => {
    try {
        const goons = await manager.getAll();
        res.send(goons);
    } catch (err) {
        res.statusCode = 500;
        res.send(err);
    }
});

controller.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const goon = await manager.getOne(id);
        res.send(goon);
    } catch (err) {
        res.statusCode = 500;
        res.send(err);
    }
});

controller.delete('/:id', authUtil.jwtAuthenticated, authUtil.jwtAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const response = await manager.deleteOne(id);
        res.send(response);
    } catch (err) {
        res.statusCode = 500;
        res.send(err);
    }
});

module.exports = controller;
