const randomUtil = require("../utilities/random.util");
const cards = require("./missing-word.constants");

function getAll() {
    return new Promise((resolve, reject) => {
        const CARDS = cards.MISSING_WORD_CARDS;
        const expandedCards = expandCards(CARDS);
        resolve(expandedCards);
    });
}

function getStats() {
    return new Promise((resolve, reject) => {
        const CARDS = cards.MISSING_WORD_CARDS;
        resolve({
            deckSize: CARDS.length
        });
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

function drawTwo() {
    return new Promise((resolve, reject) => {
        const CARDS = cards.MISSING_WORD_CARDS;
        const handSize = 2;
        const myCards = randomUtil.drawNItems(CARDS, handSize);
        const expandedCards = expandCards(myCards);
        resolve(expandedCards);
    });
}

module.exports = {
    getAll,
    getStats,
    drawOne,
    drawTwo,
}

function expandCards(cards) {
    return cards.map((card) => {
        return expandCard(card);
    });
}

function expandCard(card) {
    const missingIsFirst = card[0] === "_";
    const cardWord = card.replace("_", "").toUpperCase();
    const type = missingIsFirst ? "MISSING FIRST" : "MISSING SECOND";
    const MISSING_DISPLAY = "_____";
    const display = missingIsFirst ? `${MISSING_DISPLAY}${cardWord}` : `${cardWord}${MISSING_DISPLAY}`;
    return {
        raw: card,
        display,
        type,
        missingIsFirst
    };
}
