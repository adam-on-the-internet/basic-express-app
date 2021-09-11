const mongoose = require('mongoose');
require('./DsmPressRelease.model');
const DPR = mongoose.model('dsmPressRelease');

function getAll() {
    return new Promise((resolve, reject) => {
        DPR.find({})
            .then((items) => {
                resolve(items);
            });
    });
}

module.exports = {
    getAll
}
