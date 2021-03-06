const request = require('request');

function retrieveSimilarMeaningPhrases(oldWord) {
    return findMatchingWords("ml", oldWord);
}

function retrieveRhymes(oldWord) {
    return findMatchingWords("rel_rhy", oldWord);
}

function retrieveAntonyms(oldWord) {
    return findMatchingWords("rel_ant", oldWord);
}

function retrieveSynonyms(oldWord) {
    return findMatchingWords("rel_syn", oldWord);
}

function retrieveHomophones(oldWord) {
    return findMatchingWords("rel_hom", oldWord);
}

function retrieveConsonantMatches(oldWord) {
    return findMatchingWords("rel_cns", oldWord);
}

function retrieveKindOfMatches(oldWord) {
    return findMatchingWords("rel_spc", oldWord);
}

module.exports = {
    retrieveSimilarMeaningPhrases,
    retrieveAntonyms,
    retrieveSynonyms,
    retrieveHomophones,
    retrieveConsonantMatches,
    retrieveKindOfMatches,
    retrieveRhymes
}

function findMatchingWords(query, oldWord) {
    const url = buildDatamuseUrl(query, oldWord);
    return queryDatamuse(url);
}

function queryDatamuse(url) {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            const happyResponse = !error && response.statusCode === 200;
            if (happyResponse) {
                const words = getWordsFromResponse(body);
                const limitedWords = limitList(words, 5);
                resolve(limitedWords);
            } else {
                reject();
            }
        })
    });
}

function buildDatamuseUrl(query, oldWord) {
    const DATAMUSE_BASE = 'http://api.datamuse.com/words';
    const queryString = `?${query}=${oldWord}`;
    return DATAMUSE_BASE + queryString;
}

function limitList(list, limit) {
    const listExceedsLimit = list.length >= limit;
    const trueLimit = listExceedsLimit ? limit : list.length;
    return list.slice(0, trueLimit);
}

function getWordsFromResponse(body) {
    const items = JSON.parse(body);
    return items.map((item) => {
        return item.word;
    });
}
