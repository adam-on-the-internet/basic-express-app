const witnessPopulator = require('./witness-populate.helper');
const evidencePopulator = require('./evidence-populate.helper');

const attributeHelper = require('./attribute.helper');

function cloneCase(myCase) {
    return {
        _id: myCase._id,
        name: myCase.name,
        closedDate: myCase.closedDate,
        openedDate: myCase.openedDate,
        lastStatusUpdateDate: myCase.lastStatusUpdateDate,
        status: myCase.status,
        isDefendantGuilty: myCase.isDefendantGuilty,
        issue: myCase.issue,
        judgeName: myCase.judgeName,
        plaintiffName: myCase.plaintiffName,
        defendantName: myCase.defendantName,
        witnessName1: myCase.witnessName1,
        witnessName2: myCase.witnessName2,
        witnessName3: myCase.witnessName3,
        witnessName4: myCase.witnessName4,
        witnessName5: myCase.witnessName5,
        logs: myCase.logs,
        version: myCase.logs.length + 1,
        isCustom: myCase.isCustom,
    };
}

function populateCase(myCase) {
    let fullCase = cloneCase(myCase);
    fullCase = witnessPopulator.populateWitnesses(myCase, fullCase);
    fullCase = evidencePopulator.populateEvidence(myCase, fullCase);
    return attributeHelper.addCaseAttributes(fullCase);
}

function populateCases(myCases) {
    return myCases.map((myCase) => {
        return populateCase(myCase);
    })
}

module.exports = {
    populateCase,
    populateCases
};
