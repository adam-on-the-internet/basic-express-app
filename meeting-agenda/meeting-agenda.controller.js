const express = require('express');
const controller = express.Router();
const meetingManager = require("./meeting-agenda.manager");
const itemManager = require("./agenda-item.manager");
const authUtil = require('../utilities/auth.util');

controller.get('/meeting', (req, res) => {
    meetingManager.getAll()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/meeting/:id', (req, res) => {
    const id = req.params.id;
    meetingManager.getOne(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/meeting/', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const meetingAgenda = req.body;
    meetingManager.addOne(meetingAgenda)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.delete('/meeting/:id', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const id = req.params.id;
    meetingManager.deleteOne(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.put('/meeting/', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const item = req.body;
    meetingManager.edit(item)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/item', (req, res) => {
    itemManager.getAll()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/item/:id', (req, res) => {
    const id = req.params.id;
    itemManager.getOne(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/item/meeting/:id', (req, res) => {
    const id = req.params.id;
    itemManager.getAllForMeeting(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/item/', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const agendaItem = req.body;
    itemManager.addOne(agendaItem)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.delete('/item/:id', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const id = req.params.id;
    itemManager.deleteOne(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.put('/item/', authUtil.jwtAuthenticated, authUtil.jwtAdmin, (req, res) => {
    const item = req.body;
    itemManager.edit(item)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

module.exports = controller;
