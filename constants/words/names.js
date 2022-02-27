const constants = require("../../constants/constants.manager");

const FIRSTNAMES = [
    "Tom", "Flom", "Glom", "Trish", "Felicia",
    "Farrow", "Dave", "Nell", "Corri",
];
const LASTNAMES = ["Smithson", "Jones", "Bonker"].concat(constants.QUEST_PIECES.FAMILY_NAMES.concat(constants.TITLE_BASES.MANOR_NAMES));

module.exports = {
    FIRSTNAMES,
    LASTNAMES
};
