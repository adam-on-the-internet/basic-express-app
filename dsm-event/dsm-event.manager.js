const mongoose = require('mongoose');
require('./DsmEvent.model');
const DE = mongoose.model('dsmEvent');

function getAll() {
    return new Promise((resolve, reject) => {
        DE.find({})
            .then((items) => {
                resolve(items);
            });
    });
}

function getOne(id) {
    return new Promise((resolve, reject) => {
        DE.findOne({
            _id: id
        })
            .then((items) => {
                resolve(items);
            });
    });
}

function getRecent() {
    return new Promise((resolve, reject) => {
        DE.find({})
            .sort({discovery: -1})
            .then((items) => {
                if (!items || items.length === 0) {
                    resolve([]);
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
                // remove any duplicates
                const oldKeys = oldItems.map(item => getItemKey(item));
                const newItems = batch.filter(item => {
                    return !oldKeys.includes(getItemKey(item));
                });
                // set discovery time
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
        DE.deleteOne({
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

function getItemKey(item) {
    return item.name + item.year + item.month + item.day;
}

function saveItems(newItems, resolve) {
    const des = newItems.map(item => {
        return new DE({
            name: item.name,
            year: item.year,
            month: item.month,
            day: item.day,
            discovery: item.discovery,
            time: item.time,
            duration: item.duration,
            detail: item.detail,
            contactName: item.contactName,
            contactEmail: item.contactEmail,
            contactPhone: item.contactPhone,
            category: item.category
        });
    });

    DE.insertMany(des)
        .then((result) => {
            resolve(result);
        });
}
