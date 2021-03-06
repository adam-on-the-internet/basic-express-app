function generateRandomPassword() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function pickRandomNumber(min, max) {
    const maxOffset = max - min + 1;
    const fullRandom = Math.random() * maxOffset + min;
    return Math.floor(fullRandom);
}

function trueOrFalse() {
    return pickRandom([true, false]);
}

function pickRandom(array) {
    const shuffledArray = shuffleArray(array);
    return shuffledArray[0];
}

function drawNItems(array, n) {
    const shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, n);
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

module.exports = {
    generateRandomPassword,
    trueOrFalse,
    shuffleArray,
    pickRandomNumber,
    pickRandom,
    drawNItems
}
