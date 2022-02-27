const constants = require("../../constants/constants.manager");

// TODO more names
const FIRSTNAMES = ["Tom", "Flom", "Glom", "Trish", "Felicia"];
const LASTNAMES = ["Smithson", "Jones", "Bonker"].concat(constants.QUEST_PIECES.FAMILY_NAMES.concat(constants.TITLE_BASES.MANOR_NAMES));

module.exports = {
    FIRSTNAMES,
    LASTNAMES
};
