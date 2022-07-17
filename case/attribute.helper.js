const nameHelper = require('./name.helper');
const witnessHelper = require('./witness.helper');
const evidenceHelper = require('./evidence.helper');
const statusHelper = require('./case-status.helper');

const boolUtil = require('../utilities/bool.util');
const timeUtil = require('../utilities/time.util');

function buildWitnessPlayers(myCase) {
    const witnessPlayers = [];
    if (myCase.witness1NameSet) {
        const name1 = boolUtil.hasValue(myCase.selectedWitness1) ? myCase.selectedWitness1.name : "???";
        witnessPlayers.push({
            name: myCase.witnessName1,
            character: name1,
            witnessNumber: 1
        });
    }
    if (myCase.witness2NameSet) {
        const name2 = boolUtil.hasValue(myCase.selectedWitness2) ? myCase.selectedWitness2.name : "???";
        witnessPlayers.push({
            name: myCase.witnessName2,
            character: name2,
            witnessNumber: 2
        });
    }
    if (myCase.witness3NameSet) {
        const name3 = boolUtil.hasValue(myCase.selectedWitness3) ? myCase.selectedWitness3.name : "???";
        witnessPlayers.push({
            name: myCase.witnessName3,
            character: name3,
            witnessNumber: 3
        });
    }
    if (myCase.witness4NameSet) {
        const name4 = boolUtil.hasValue(myCase.selectedWitness4) ? myCase.selectedWitness4.name : "???";
        witnessPlayers.push({
            name: myCase.witnessName4,
            character: name4,
            witnessNumber: 4
        });
    }
    if (myCase.witness5NameSet) {
        const name5 = boolUtil.hasValue(myCase.selectedWitness5) ? myCase.selectedWitness5.name : "???";
        witnessPlayers.push({
            name: myCase.witnessName5,
            character: name5,
            witnessNumber: 5
        });
    }
    return witnessPlayers;
}

function addSummary(myCase) {
    const openedDateDisplay = timeUtil.getDateString(new Date(myCase.openedDate));
    myCase.summary = `${myCase.fullCaseName} | Opened: ${openedDateDisplay} | Status: ${myCase.statusText} (${myCase.status})`;
    return myCase;
}

function addStatusAttributes(myCase) {
    myCase.statusText = statusHelper.getStatusText(myCase);
    myCase.isAssignRoles = statusHelper.isAssignRoles(myCase);
    myCase.isMakeSelections = statusHelper.isMakeSelections(myCase);
    myCase.isFreeTime = statusHelper.isFreeTime(myCase);
    myCase.isOpeningArguments = statusHelper.isOpeningArguments(myCase);
    myCase.isCrossfire = statusHelper.isCrossfire(myCase);
    myCase.isClosingArguments = statusHelper.isClosingArguments(myCase);
    myCase.isVerdictSelection = statusHelper.isVerdictSelection(myCase);
    myCase.isClosed = statusHelper.isClosed(myCase);
    myCase.isInProgress = statusHelper.isInProgress(myCase);
    myCase.verdictIsNext = statusHelper.verdictIsNext(myCase);
    return myCase;
}

function addEvidenceAttributes(myCase) {
    myCase.isStartingPlaintiffEvidenceRevealed = evidenceHelper.isStartingPlaintiffEvidenceRevealed(myCase);
    myCase.isStartingDefendantEvidenceRevealed = evidenceHelper.isStartingDefendantEvidenceRevealed(myCase);
    myCase.isStartingEvidenceRevealed = evidenceHelper.isStartingEvidenceRevealed(myCase);
    myCase.isAllPlaintiffEvidenceRevealed = evidenceHelper.isAllPlaintiffEvidenceRevealed(myCase);
    myCase.isAllDefendantEvidenceRevealed = evidenceHelper.isAllDefendantEvidenceRevealed(myCase);
    myCase.isAllEvidenceRevealed = evidenceHelper.isAllEvidenceRevealed(myCase);
    return myCase;
}

function addWitnessAttributes(myCase) {
    myCase.howManyWitnessesSelected = witnessHelper.howManyWitnessesSelected(myCase);
    myCase.allWitnessesReady = myCase.howManyWitnessesSelected === myCase.howManyWitnessNames;
    myCase.witnessPlayers = buildWitnessPlayers(myCase);
    return myCase;
}

function addNameAttributes(myCase) {
    myCase.areEssentialNamesSet = nameHelper.areEssentialNamesSet(myCase);
    myCase.isAnyNameSet = nameHelper.isAnyNameSet(myCase);
    myCase.howManyPlayerNames = nameHelper.howManyPlayerNames(myCase);
    myCase.howManyWitnessNames = nameHelper.howManyWitnesses(myCase);
    myCase.judgeNameSet = boolUtil.hasValue(myCase.judgeName);
    myCase.plaintiffNameSet = boolUtil.hasValue(myCase.plaintiffName);
    myCase.defendantNameSet = boolUtil.hasValue(myCase.defendantName);
    myCase.witness1NameSet = boolUtil.hasValue(myCase.witnessName1);
    myCase.witness2NameSet = boolUtil.hasValue(myCase.witnessName2);
    myCase.witness3NameSet = boolUtil.hasValue(myCase.witnessName3);
    myCase.witness4NameSet = boolUtil.hasValue(myCase.witnessName4);
    myCase.witness5NameSet = boolUtil.hasValue(myCase.witnessName5);
    return myCase;
}

function addGeneralAttributes(myCase) {
    myCase.fullCaseName = "The Case of the " + myCase.name;
    myCase.fullIssue = "The Plaintiff claims that The Defendant " + myCase.issue;
    return myCase;
}

function addCaseAttributes(myCase) {
    myCase = addGeneralAttributes(myCase);
    myCase = addNameAttributes(myCase);
    myCase = addWitnessAttributes(myCase);
    myCase = addEvidenceAttributes(myCase);
    myCase = addStatusAttributes(myCase);
    return addSummary(myCase);
}

module.exports = {
    addCaseAttributes
};
