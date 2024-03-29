const boolUtil = require('../utilities/bool.util');

function checkForAddErrors(item) {
    const errors = checkForGeneralErrors(item);
    if (boolUtil.hasValue(item._id)) {
        errors.push({ text: 'New item cannot have an id.' });
    }
    return errors;
}

function checkForEditErrors(item) {
    const errors = checkForGeneralErrors(item);
    if (boolUtil.hasNoValue(item._id)) {
        errors.push({ text: 'Editing item must have an id.' });
    }
    return errors;
}

function checkForGeneralErrors(item) {
    let errors = [];
    if (boolUtil.hasNoValue(item.name)) {
        errors.push({ text: 'Please add a name' });
    }
    if (boolUtil.hasNoValue(item.time)) {
        errors.push({ text: 'Please add a time' });
    }
    if (boolUtil.hasNoValue(item.place)) {
        errors.push({ text: 'Please add a place' });
    }
    if (boolUtil.hasNoValue(item.type)) {
        errors.push({ text: 'Please add a type' });
    }
    boolUtil.validateLinks(item.links, errors);
    return errors;
}

module.exports = {
    checkForAddErrors,
    checkForEditErrors,
}
