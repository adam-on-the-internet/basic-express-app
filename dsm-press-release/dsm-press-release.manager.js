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

function getOne(id) {
    return new Promise((resolve, reject) => {
        DPR.findOne({
            _id: id
        })
            .then((items) => {
                resolve(items);
            });
    });
}

function getRecent() {
    return new Promise((resolve, reject) => {
        DPR.find({})
            .sort({discovery: -1})
            .then((items) => {
                if (items.length === 0) {
                    return [];
                }
                const mostRecentTime = items[0].discovery;
                const mostRecentItems = items.filter(item => item.discovery.getTime() === mostRecentTime.getTime());
                resolve(mostRecentItems);
            });
    });
}

function addBatch(batch) {
    return new Promise((resolve, reject) => {
        getAll()
            .then((oldItems) => {
                const oldUrls = oldItems.map(item => item.URL);
                const newItems = batch.filter(item => {
                    return !oldUrls.includes(item.URL);
                });
                const discoveryTime = new Date();
                newItems.forEach(item => item.discovery = discoveryTime);
                saveItems(newItems, resolve);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

function deleteOne(id) {
    return new Promise((resolve, reject) => {
        DPR.deleteOne({
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
    getOne,
    getRecent,
    addBatch,
    deleteOne,
}

function saveItems(newItems, resolve) {
    const dprs = newItems.map(item => {
        return new DPR({
            URL: item.URL,
            discovery: item.discovery,
            title: item.title,
            text: item.text,
        });
    });

    DPR.insertMany(dprs)
        .then((result) => {
            resolve(result);
        });
}
