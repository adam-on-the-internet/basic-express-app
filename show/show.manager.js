const mongoose = require('mongoose');
require('./Show.model');
const Show = mongoose.model('show');
const validator = require('./show.validator');
const copyUtil = require('../utilities/copy.util');

function getAll() {
    return new Promise((resolve, reject) => {
        Show.find({})
            .sort({showDate: 1})
            .then((all) => {
                const allReports = all.map(item => getReport(item));
                resolve(allReports);
            });
    });
}

function getUpcoming() {
    return new Promise((resolve, reject) => {
        const dateDetails = getCurrentDesMoinesDateTime();
        const currentDate = dateDetails.rawDateCurrent;
        const oneMonthOutDate = dateDetails.rawDateOneMonthOut;
        Show.find({
            showDate: {
                $gte: currentDate,
                $lte: oneMonthOutDate
            }
        })
            .sort({showDate: 1})
            .then((items) => {
                const itemReports = items.map(item => getReport(item));
                resolve(itemReports);
            });
    });
}

function getFuture() {
    return new Promise((resolve, reject) => {
        const dateDetails = getCurrentDesMoinesDateTime();
        const currentDate = dateDetails.rawDateCurrent;
        Show.find({
            showDate: {
                $gte: currentDate
            }
        })
            .sort({showDate: 1})
            .then((items) => {
                const itemReports = items.map(item => getReport(item));
                resolve(itemReports);
            });
    });
}

function getPast() {
    return new Promise((resolve, reject) => {
        const dateDetails = getCurrentDesMoinesDateTime();
        const currentDate = dateDetails.rawDateCurrent;
        Show.find({
            showDate: {
                $lte: currentDate
            }
        })
            .sort({showDate: 1})
            .then((items) => {
                const itemReports = items.map(item => getReport(item));
                resolve(itemReports);
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
    const currentDate = new Date();
    const currentDateString = convertDateToChicagoTimezoneString(currentDate);

    const oneMonthOutDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate() + 1);
    const oneMonthOutString = convertDateToChicagoTimezoneString(oneMonthOutDate);

    return {
        rawDate: currentDateString,
        rawDateCurrent: currentDateString,
        rawDateOneMonthOut: oneMonthOutString,
    };
}

function add(item) {
    return new Promise((resolve, reject) => {
        const errors = validator.checkForCreateErrors(item);
        if (errors.length > 0) {
            reject(errors);
        } else {
            const showDate = convertYYYYMMDDtoShowDate(item);
            new Show({
                title: item.title,
                venue: item.venue,
                showDate: showDate,
            })
                .save()
                .then((item) => {
                    resolve(item);
                });
        }
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
                        const showDate = convertYYYYMMDDtoShowDate(item);

                        foundItem.title = item.title;
                        foundItem.venue = item.venue;
                        foundItem.showDate = showDate;

                        foundItem.save()
                            .then((response) => {
                                resolve(response);
                            });
                    }
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

module.exports = {
    getAll,
    getUpcoming,
    getFuture,
    getPast,
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

function convertDateToChicagoTimezoneString(date) {
    return date
        .toLocaleString("en-US", {timeZone: "America/Chicago"});
}

function convertYYYYMMDDtoShowDate(item) {
    const showDatePieces = item.date.split("-")
    const year = showDatePieces[0];
    const month = showDatePieces[1] - 1;
    const date = showDatePieces[2];
    const showHourPieces = item.time.split(":")
    const hour = showHourPieces[0];
    const minute = showHourPieces[1];
    return new Date(year, month, date, hour, minute);
}
