const mongoose = require('mongoose');
require('./Venue.model');
const Venue = mongoose.model('venue');
const validator = require('./venue.validator');
const copyUtil = require('../utilities/copy.util');

function getAll() {
    return new Promise((resolve, reject) => {
        Venue.find({})
            .then((all) => {
                const allReports = all.map(item => getReport(item));
                resolve(allReports);
            });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        Venue.findOne({
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
        const errors = validator.checkForCreateErrors(item);
        if (errors.length > 0) {
            reject(errors);
        } else {
            const data = {
                name: item.name,
                url: item.url,
                address: item.address,
            };
            new Venue(data)
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
            Venue.findOne({
                _id: id
            })
                .then((foundItem) => {
                    if (!foundItem) {
                        reject({
                            message: `Failed to find item`
                        });
                    } else {

                        foundItem.name = item.name;
                        foundItem.url = item.url;
                        foundItem.address = item.address;

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
    getById,
    add,
    deleteOne,
    edit,
};

function getReport(item) {
    const report = copyUtil.copy(item);
    return report;
}
