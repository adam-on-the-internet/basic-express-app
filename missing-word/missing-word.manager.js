const randomUtil = require("../utilities/random.util");
const cards = require("./missing-word.constants");

function getAll() {
    return new Promise((resolve, reject) => {
        const CARDS = cards.MISSING_WORD_CARDS;
        const expandedCards = expandCards(CARDS);
        resolve(expandedCards);
    });
}

function drawOne() {
    return new Promise((resolve, reject) => {
        const CARDS = cards.MISSING_WORD_CARDS;
        const card = randomUtil.pickRandom(CARDS);
        const expandedCard = expandCard(card);
        resolve(expandedCard);
    });
}

module.exports = {
    getAll,
    drawOne,
}

function expandCards(cards) {
    return cards.map((card) => {
        return expandCard(card);
    });
}

function expandCard(card) {
    const splitCard = card.split(" ");
    const missingIsFirst = splitCard[0] === "_";
    const type = missingIsFirst ? "MISSING FIRST" : "MISSING SECOND";
    const MISSING_DISPLAY = "_____";
    const display = missingIsFirst ? `${MISSING_DISPLAY} ${splitCard[1]}` : `${splitCard[0]} ${MISSING_DISPLAY}`;
    return {
        raw: card,
        display,
        type,
        missingIsFirst
    };
}
