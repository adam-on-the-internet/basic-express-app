const mongoose = require('mongoose');
require('./Case.model');
const Case = mongoose.model('case');

const caseSorter = require('./case-sort.helper');
const casePopulator = require('./case-populate.helper');

function getAllCases() {
    return new Promise((resolve, reject) => {
        Case.find({})
            .then((allCases) => {
                const populatedCases = casePopulator.populateCases(allCases);
                const sortedCases = caseSorter.sortCasesByStatus(populatedCases);
                resolve(sortedCases);
            });
    });
}

function getAllCasesFlat() {
    return new Promise((resolve, reject) => {
        Case.find({})
            .then((allCases) => {
                const populatedCases = casePopulator.populateCases(allCases);
                const orderedCases = caseSorter.orderCasesByDate(populatedCases);
                resolve(orderedCases);
            });
    });
}

function getCaseById(id) {
    return new Promise((resolve, reject) => {
        Case.findOne({
            _id: id
        })
            .then((myCase) => {
                if (myCase) {
                    const fullCase = casePopulator.populateCase(myCase);
                    resolve(fullCase);
                } else {
                    reject({
                        message: "Failed to find case"
                    });
                }
            });
    });
}

function deleteOneCase(id) {
    return new Promise((resolve, reject) => {
        Case.deleteOne({
            _id: id
        })
            .then(() => {
                resolve({
                    message: `Case with given id deleted or never existed`
                });
            });
    });
}

module.exports = {
    getAllCases,
    getAllCasesFlat,
    getCaseById,
    deleteOneCase,
}
