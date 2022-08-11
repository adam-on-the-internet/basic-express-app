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

controller.post('/newsPost/:id/check', (req, res) => {
    const id = req.params.id;
    manager.checkNewsPost(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/calendarEvent', (req, res) => {
    manager.getAllCalendarEvents()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/calendarEvent', (req, res) => {
    const calendarEvent = req.body;
    manager.saveCalendarEvent(calendarEvent)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/calendarEvent/:id/check', (req, res) => {
    const id = req.params.id;
    manager.checkCalendarEvent(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/councilMeeting', (req, res) => {
    manager.getAllCouncilMeetings()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/councilMeeting', (req, res) => {
    const councilMeeting = req.body;
    manager.saveCouncilMeeting(councilMeeting)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/councilMeeting/:id/check', (req, res) => {
    const id = req.params.id;
    manager.checkCouncilMeeting(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/councilMeeting/:id/update', (req, res) => {
    const id = req.params.id;
    const councilMeeting = req.body;
    manager.updateCouncilMeeting(id, councilMeeting)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/plaintextAgenda/:code', (req, res) => {
    const code = req.params.code;
    manager.getPlaintextAgendas(code)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/plaintextAgenda', (req, res) => {
    const plaintextAgenda = req.body;
    manager.savePlaintextAgenda(plaintextAgenda)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

module.exports = controller;
