const boolUtil = require('../utilities/bool.util');

function checkForCreateErrors(item) {
    const errors = checkForGeneralErrors(item);
    if (boolUtil.hasValue(item._id)) {
        errors.push({text: 'Create cannot have an id.'});
    }
    return errors;
}

function checkForEditErrors(item) {
    const errors = checkForGeneralErrors(item);
    if (boolUtil.hasNoValue(item._id)) {
        errors.push({text: 'Edit must have an id.'});
    }
    return errors;
}

function checkForGeneralErrors(item) {
    const errors = [];
    if (boolUtil.hasNoValue(item.name)) {
        errors.push({ text: 'Please add a name' });
    }
    return errors;
}

module.exports = {
    checkForCreateErrors,
    checkForEditErrors
}
