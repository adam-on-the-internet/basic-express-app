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

controller.put('/', authUtil.jwtAuthenticated, authUtil.jwtAdmin, async (req, res) => {
    const tunnelGoon = req.body;
    manager.edit(tunnelGoon)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/ping/:id/:class/:bonus', authUtil.jwtAuthenticated, authUtil.jwtAdmin, async (req, res) => {
    const id = req.params.id;
    const classScore = req.params.class;
    const bonusScore = req.params.bonus;
    manager.upOneLevel(id, classScore, bonusScore)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/note/:id', authUtil.jwtAuthenticated, authUtil.jwtAdmin, async (req, res) => {
    const id = req.params.id;
    const note = req.body.note;
    manager.addNote(id, note)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/item/:id', authUtil.jwtAuthenticated, authUtil.jwtAdmin, async (req, res) => {
    const id = req.params.id;
    const note = req.body.item;
    manager.addNote(id, note)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
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
