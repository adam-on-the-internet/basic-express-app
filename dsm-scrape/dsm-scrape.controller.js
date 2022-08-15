const express = require('express');
const controller = express.Router();
const manager = require("./dsm-scrape.manager");

controller.get('/newsPost', (req, res) => {
    console.log("Getting news posts...");
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

controller.get('/agendaVersion/:code', (req, res) => {
    const code = req.params.code;
    manager.getAgendaVersions(code)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.get('/agendaVersion', (req, res) => {
    manager.getAllAgendaVersions()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/agendaVersion', (req, res) => {
    const agendaVersion = req.body;
    manager.saveAgendaVersion(agendaVersion)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

controller.post('/agendaVersion/:id/check', (req, res) => {
    const id = req.params.id;
    manager.checkAgendaVersion(id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send(err);
        });
});

module.exports = controller;
