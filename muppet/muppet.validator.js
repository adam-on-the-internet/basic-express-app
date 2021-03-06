const boolUtil = require('../utilities/bool.util');

function checkForCreateErrors(muppet) {
    const errors = checkForGeneralErrors(muppet);
    if (boolUtil.hasValue(muppet._id)) {
        errors.push({text: 'Create cannot have an id.'});
    }
    return errors;
}

function checkForEditErrors(muppet) {
    const errors = checkForGeneralErrors(muppet);
    if (boolUtil.hasNoValue(muppet._id)) {
        errors.push({text: 'Edit must have an id.'});
    }
    return errors;
}

function checkForGeneralErrors(muppet) {
    const muppetStats = [
        "starQuality",
        "friendliness",
        "imagination",
        "showmanship",
        "humor",
        "absentmindedness",
        "mischief",
        "floppiness",
        "passion",
        "softness",
    ];
    const dndStats = [
        "strength",
        "dexterity",
        "wisdom",
        "intelligence",
        "constitution",
        "charisma",
    ];
    const fields = [
        "name",
        "debutYear",
        "commonality",
        "speechType",
        "mainSeries",
        "creature",
        "strength",
        "wisdom",
        "intelligence",
        "constitution",
        "charisma",
        "dexterity",
        "muppetRank",
        "alignment",
        "archived",
    ];
    const errs = boolUtil.collectErrors(muppet, fields.concat(muppetStats));
    const COMMONALITIES = ["RARE", "UNCOMMON", "COMMON"];
    if (muppet.commonality && !COMMONALITIES.includes(muppet.commonality.toUpperCase())) {
        errs.push("Invalid commonality");
    }
    const SPEECH_TYPES = ["NONE", "GIBBERISH", "ENGLISH"];
    if (muppet.speechType && !SPEECH_TYPES.includes(muppet.speechType.toUpperCase())) {
        errs.push("Invalid speech type");
    }
    const ALIGNMENTS = [
        "LAWFUL GOOD", "NEUTRAL GOOD", "CHAOTIC GOOD",
        "LAWFUL NEUTRAL", "TRUE NEUTRAL", "CHAOTIC NEUTRAL",
        "LAWFUL EVIL", "NEUTRAL EVIL", "CHAOTIC EVIL",
        "UNALIGNED",
    ];
    if (muppet.alignment && !ALIGNMENTS.includes(muppet.alignment.toUpperCase())) {
        errs.push("Invalid alignment");
    }
    if (muppet.muppetRank && (muppet.muppetRank < 0 || muppet.muppetRank > 100)) {
        errs.push("Invalid muppet rank");
    }
    muppetStats.forEach((stat) => {
        if (muppet[stat] && (muppet[stat] < 0 || muppet[stat] > 10)) {
            errs.push("Invalid muppet stat " + stat);
        }
    });
    dndStats.forEach((stat) => {
        if (muppet[stat] && (muppet[stat] < 0 || muppet[stat] > 10)) {
            errs.push("Invalid dnd stat " + stat);
        }
    });
    return errs;
}

module.exports = {
    checkForCreateErrors,
    checkForEditErrors
}
