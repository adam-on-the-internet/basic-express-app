const mongoose = require('mongoose');
require('./MeetingAgenda.model');
const MeetingAgenda = mongoose.model('meetingAgenda');
const validator = require('./meeting-agenda.validator');
const agendaItemManager = require('./agenda-item.manager');
const copyUtil = require('../utilities/copy.util');

function getAll() {
    return new Promise((resolve, reject) => {
        MeetingAgenda.find({})
            .then((agendas) => {
                resolve(agendas);
            });
    });
}

function getOne(id) {
    return new Promise((resolve, reject) => {
        MeetingAgenda.findOne({
            _id: id
        })
            .then((item) => {
                if (item) {
                    agendaItemManager.getAllForMeeting(id)
                        .then((response) => {
                            const meeting = copyUtil.copy(item);
                            meeting.agendaItems = response;
                            resolve(meeting);
                        })
                        .catch((err) => {
                            reject({
                                message: "Failed to find item"
                            });
                        });
                } else {
                    reject({
                        message: "Failed to find item"
                    });
                }
            });
    });
}

function addOne(meetingAgenda) {
    return new Promise((resolve, reject) => {
        const errors = validator.checkForAddErrors(meetingAgenda);
        if (errors.length > 0) {
            reject(errors);
        } else {
            new MeetingAgenda({
                name: meetingAgenda.name,
                time: meetingAgenda.time,
                place: meetingAgenda.place,
                type: meetingAgenda.type,
                description: meetingAgenda.description,
                subtitle: meetingAgenda.subtitle,
                tags: meetingAgenda.tags,
                highlights: meetingAgenda.highlights,
                links: meetingAgenda.links,
            })
                .save()
                .then((response) => {
                    resolve(response);
                });
        }
    });
}

function edit(item) {
    return new Promise((resolve, reject) => {
        const errors = validator.checkForEditErrors(item);
        if (errors.length > 0) {
            reject({
                errors: errors
            });
        } else {
            const id = item._id;
            MeetingAgenda.findOne({
                _id: id
            })
                .then((foundItem) => {
                    if (!foundItem) {
                        reject({
                            message: `Failed to find item`
                        });
                    } else {
                        foundItem.name = item.name;
                        foundItem.place = item.place;
                        foundItem.type = item.type;
                        foundItem.description = item.description;
                        foundItem.subtitle = item.subtitle;
                        foundItem.tags = item.tags;
                        foundItem.highlights = item.highlights;

                        foundItem.save()
                            .then((editedItem) => {
                                resolve(editedItem);
                            });
                    }
                });
        }
    });
}

function deleteOne(id) {
    return new Promise((resolve, reject) => {
        agendaItemManager.deleteAllForMeeting(id)
            .then((response) => {
                MeetingAgenda.deleteOne({
                    _id: id
                })
                    .then(() => {
                        resolve({
                            message: `Item with given id deleted or never existed`
                        });
                    });
            })
            .catch((err) => {
                reject({
                    message: `Failed to run delete`
                });
            });
    });
}

module.exports = {
    getAll,
    addOne,
    getOne,
    deleteOne,
    edit,
}
