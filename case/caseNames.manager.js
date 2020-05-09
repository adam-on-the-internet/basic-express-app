const mongoose = require('mongoose');
require('./Case.model');
const Case = mongoose.model('case');

const caseUtil = require('./case-helper.util');

function assignJudgeName(judgeName, caseId) {
    return new Promise((resolve, reject) => {
        if (!judgeName || !caseId) {
            reject("cannot update judge name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else {
                        foundCase.judgeName = judgeName;

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

function removeJudgeName(caseId) {
    return new Promise((resolve, reject) => {
        if (!caseId) {
            reject("cannot remove judge name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else {
                        foundCase.judgeName = null;

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

function assignPlaintiffName(plaintiffName, caseId) {
    return new Promise((resolve, reject) => {
        if (!plaintiffName || !caseId) {
            reject("cannot update plaintiff name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else {
                        foundCase.plaintiffName = plaintiffName;

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

function removePlaintiffName(caseId) {
    return new Promise((resolve, reject) => {
        if (!caseId) {
            reject("cannot remove plaintiff name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else {
                        foundCase.plaintiffName = null;

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

function assignDefendantName(defendantName, caseId) {
    return new Promise((resolve, reject) => {
        if (!defendantName || !caseId) {
            reject("cannot update defendant name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else {
                        foundCase.defendantName = defendantName;

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

function removeDefendantName(caseId) {
    return new Promise((resolve, reject) => {
        if (!caseId) {
            reject("cannot remove defendant name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else {
                        foundCase.defendantName = null;

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

function addWitnessName(witnessName, caseId) {
    return new Promise((resolve, reject) => {
        if (!witnessName || !caseId) {
            reject("cannot add witness name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else if (foundCase.witnessNames.length > 4) {
                        reject({
                            message: `This case cannot have any more witnesses`
                        });
                    } else {
                        foundCase.witnessNames.push(witnessName);

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

function removeWitnessName(witnessName, caseId) {
    return new Promise((resolve, reject) => {
        if (!witnessName || !caseId) {
            reject("cannot remove witness name");
        } else {
            Case.findOne({ _id: caseId })
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!caseUtil.isCaseStatusAssignRoles(foundCase)) {
                        reject({
                            message: `CANNOT UPDATE NAMES`
                        });
                    } else if (!foundCase.witnessNames.includes(witnessName)) {
                        reject({
                            message: `CANNOT REMOVE THIS NAME`
                        });
                    } else {
                        foundCase.witnessNames = foundCase.witnessNames.filter((name) => {
                            return name !== witnessName;
                        });

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });
                    }
                });
        }
    });
}

module.exports = {
    assignJudgeName,
    removeJudgeName,
    assignPlaintiffName,
    removePlaintiffName,
    assignDefendantName,
    removeDefendantName,
    addWitnessName,
    removeWitnessName
}