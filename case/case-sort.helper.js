const statusHelper = require('./case-status.helper');

function orderCasesByDate(cases) {
    return cases.sort(function (caseA, caseB) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(caseB.openedDate) - new Date(caseA.openedDate);
    });
}

function sortCasesByStatus(myCases) {
    const orderedCases = orderCasesByDate(myCases);
    const sortedCases = {
        openCases: [],
        closedCases: [],
        limboCases: [],
    };
    orderedCases.forEach((myCase) => {
        if (statusHelper.isLimbo(myCase)) {
            sortedCases.limboCases.push(myCase);
        } else if (statusHelper.isClosed(myCase)) {
            sortedCases.closedCases.push(myCase);
        } else {
            sortedCases.openCases.push(myCase);
        }
    });
    return sortedCases;
}

module.exports = {
    sortCasesByStatus,
    orderCasesByDate,
};
