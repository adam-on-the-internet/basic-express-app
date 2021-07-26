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
    if (boolUtil.hasNoValue(item.section)) {
        errors.push({ text: 'Please add a section' });
    }
    if (boolUtil.hasNoValue(item.cityText)) {
        errors.push({ text: 'Please add city text' });
    }
    if (boolUtil.hasNoValue(item.meetingAgendaId)) {
        errors.push({ text: 'Please add a meeting agenda id' });
    }
    boolUtil.validateLinks(item.cityAttachments, errors);
    boolUtil.validateLinks(item.ourLinks, errors);
    return errors;
}

module.exports = {
    checkForAddErrors,
    checkForEditErrors,
}
