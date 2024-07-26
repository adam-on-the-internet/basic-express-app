const mongoose = require('mongoose');
require('./Show.model');
const Show = mongoose.model('show');
const validator = require('./show.validator');
const copyUtil = require('../utilities/copy.util');

function getAll() {
    return new Promise((resolve, reject) => {
        Show.find({})
            .then((all) => {
                const allReports = all.map(item => getReport(item));
                resolve(allReports);
            });
    });
}

function getUpcoming() {
    return new Promise((resolve, reject) => {
        // TODO just get the upcoming, based on current des moines datetime
        const x = new Date();
        const y = new Date();
        Show.find({
            date: {
                $gte: x,
                $lte: y
            }
        })
            .then((all) => {
                const allReports = all.map(item => getReport(item));
                resolve(allReports);
            });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        Show.findOne({
            _id: id
        })
            .then((item) => {
                if (item) {
                    const report = getReport(item);
                    resolve(report);
                } else {
                    reject({
                        message: "Failed to find item"
                    });
                }
            });
    });
}

function getCurrentDesMoinesDateTime() {
    const chicago_datetime_str = new Date()
        .toLocaleString("en-US", {timeZone: "America/Chicago"});
    const datetimeDetails = {
        rawDate: chicago_datetime_str
    };
    return datetimeDetails;
}

function add(item) {
    return new Promise((resolve, reject) => {
        const errors = validator.checkForCreateErrors(item);
        if (errors.length > 0) {
            reject(errors);
        } else {
            new Show({
                title: item.title,
                venue: item.venue,
                date: item.date,
            })
                .save()
                .then((item) => {
                    resolve(item);
                });
        }
    });
}

function deleteOne(id) {
    return new Promise((resolve, reject) => {
        Show.deleteOne({
            _id: id
        })
            .then(() => {
                resolve({
                    message: `Item with given id deleted or never existed`
                });
            });
    });
}

function edit(item) {
    return new Promise((resolve, reject) => {
        const errors = validator.checkForEditErrors(item);
        if (errors.length > 0) {
            reject(errors);
        } else {
            const id = item._id;
            Show.findOne({
                _id: id
            })
                .then((foundItem) => {
                    if (!foundItem) {
                        reject({
                            message: `Failed to find item`
                        });
                    } else {
                        foundItem.title = item.title;
                        foundItem.venue = item.venue;
                        foundItem.date = item.date;

                        foundItem.save()
                            .then((response) => {
                                resolve(response);
                            });
                    }
                });
        }
    });
}

module.exports = {
    getAll,
    getUpcoming,
    getById,
    getDesMoinesDateTimeDetails,
    add,
    deleteOne,
    edit,
};

function getReport(item) {
    const report = copyUtil.copy(item);
    // At this layer, we can add calculated values to the Item.
    return report;
}

function getDesMoinesDateTimeDetails() {
    return new Promise((resolve, reject) => {
        const datetimeDetails = getCurrentDesMoinesDateTime();
        return resolve(datetimeDetails);
    });
}
