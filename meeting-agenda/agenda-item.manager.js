const mongoose = require('mongoose');
require('./AgendaItem.model');
const AgendaItem = mongoose.model('agendaItem');
const validator = require('./agenda-item.validator');

function getAll() {
    return new Promise((resolve, reject) => {
        AgendaItem.find({})
            .then((agendas) => {
                resolve(agendas);
            });
    });
}

function getAllForMeeting(id) {
    return new Promise((resolve, reject) => {
        AgendaItem.find({meetingAgendaId: id})
            .then((agendas) => {
                resolve(agendas);
            });
    });
}

function getOne(id) {
    return new Promise((resolve, reject) => {
        AgendaItem.findOne({
            _id: id
        })
            .then((item) => {
                if (item) {
                    resolve(item);
                } else {
                    reject({
                        message: "Failed to find item"
                    });
                }
            });
    });
}

function addOne(item) {
    return new Promise((resolve, reject) => {
        const errors = validator.checkForAddErrors(item);
        if (errors.length > 0) {
            reject(errors);
        } else {
            new AgendaItem({
                name: item.name,
                meetingAgendaId: item.meetingAgendaId,
                section: item.section,
                cityText: item.cityText,
                ourText: item.ourText,
                cityAttachments: item.cityAttachments,
                ourLinks: item.ourLinks,
                tags: item.tags,
                ourComments: item.ourComments,
                ourPriority: item.ourPriority,
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
            AgendaItem.findOne({
                _id: id
            })
                .then((foundItem) => {
                    if (!foundItem) {
                        reject({
                            message: `Failed to find item`
                        });
                    } else {
                        foundItem.name = item.name;
                        foundItem.meetingAgendaId = item.meetingAgendaId;
                        foundItem.section = item.section;
                        foundItem.cityText = item.cityText;
                        foundItem.ourText = item.ourText;
                        foundItem.cityAttachments = item.cityAttachments;
                        foundItem.ourLinks = item.ourLinks;
                        foundItem.tags = item.tags;
                        foundItem.ourComments = item.ourComments;
                        foundItem.ourPriority = item.ourPriority;

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
        AgendaItem.deleteOne({
            _id: id
        })
            .then(() => {
                resolve({
                    message: `Item with given id deleted or never existed`
                });
            });
    });
}

function deleteAllForMeeting(id) {
    return new Promise((resolve, reject) => {
        AgendaItem.deleteAll({
            meetingAgendaId: id
        })
            .then(() => {
                resolve({
                    message: `Items with meeting id deleted or never existed`
                });
            });
    });
}

module.exports = {
    getAll,
    getAllForMeeting,
    addOne,
    getOne,
    deleteOne,
    deleteAllForMeeting,
    edit,
}
