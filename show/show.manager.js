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

function add(item) {
    return new Promise((resolve, reject) => {
        console.log("about to validate show...");
        const errors = validator.checkForCreateErrors(item);
        console.log("validated show...");
        if (errors.length > 0) {
            console.log("found errors with show");
            reject(errors);
        } else {
            console.log("submitting show");
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
    getById,
    add,
    deleteOne,
    edit,
};


function getReport(item) {
    const report = copyUtil.copy(item);
    // At this layer, we can add calculated values to the Item.
    return report;
}
