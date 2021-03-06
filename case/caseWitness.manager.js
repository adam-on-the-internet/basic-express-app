const mongoose = require('mongoose');
require('./Case.model');
const Case = mongoose.model('case');

const boolUtil = require('../utilities/bool.util');
const witnessHelper = require('./witness.helper');
const statusHelper = require('./case-status.helper');

function selectWitness(caseId, witnessIndex, witnessNumber) {
    return new Promise((resolve, reject) => {
        const hasCaseId = boolUtil.hasValue(caseId);
        const hasWitnessIndex = boolUtil.hasValue(witnessIndex);
        if (!hasCaseId || !hasWitnessIndex) {
            reject("Case id and witness index required.");
        } else {
            Case.findOne({_id: caseId})
                .then((foundCase) => {
                    if (!foundCase) {
                        reject({
                            message: `Failed to find case`
                        });
                    } else if (!canSelectWitness(foundCase, witnessNumber)) {
                        reject({
                            message: `CANNOT SELECT WITNESS ${witnessNumber}`
                        });
                    } else if (!witnessHelper.isWitnessSelectable(foundCase, witnessNumber, witnessIndex)) {
                        reject({
                            message: `WITNESS NOT SELECTABLE`
                        });
                    } else {
                        witnessHelper.selectWitness(foundCase, witnessNumber, witnessIndex);
                        const witnessCharacter = foundCase.witnessValues[witnessIndex];
                        let witnessName;
                        if (witnessNumber === 1) {
                            witnessName = foundCase.witnessName1;
                        } else if (witnessNumber === 2) {
                            witnessName = foundCase.witnessName2;
                        } else if (witnessNumber === 3) {
                            witnessName = foundCase.witnessName3;
                        } else if (witnessNumber === 4) {
                            witnessName = foundCase.witnessName4;
                        } else if (witnessNumber === 5) {
                            witnessName = foundCase.witnessName5;
                        }
                        foundCase.logs.push(`Witness #${witnessNumber} is ${witnessCharacter}`);

                        foundCase.save()
                            .then((updatedCase) => {
                                resolve(updatedCase);
                            });

                    }
                });
        }
    });
}

function canSelectWitness(myCase, witnessNumber) {
    const caseMakingSelections = statusHelper.isMakeSelections(myCase);
    const witnessNumberAvailable = witnessHelper.witnessAvailable(myCase, witnessNumber);
    return caseMakingSelections && witnessNumberAvailable;
}

module.exports = {
    selectWitness
}
