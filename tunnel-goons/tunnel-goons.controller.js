const express = require('express');
const controller = express.Router();
const manager = require("./tunnel-goons.manager");

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

module.exports = controller;
