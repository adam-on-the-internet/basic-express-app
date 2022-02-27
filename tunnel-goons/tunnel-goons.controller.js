const express = require('express');
const controller = express.Router();
const manager = require("./tunnel-goons.manager");

controller.post('/random', async (req, res) => {
    try {
        const goon = await manager.makeOneRandom();
        res.send(goon);
    } catch (err) {
        res.statusCode = 500;
        res.send(err);
    }
});

module.exports = controller;
