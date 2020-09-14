const randomUtil = require('../utilities/random.util');
const boolUtil = require('../utilities/bool.util');
const randomManager = require('../random/random.manager');

const codeRetriever = require('./code-retriever');
const trigger = require('./trigger');

function handleChapterEvent(hero) {
    const chapterEvent = randomManager.pickChapterEvent();
    const distance = addDistance(chapterEvent, hero);
    const flavorText = takeChapterPath(chapterEvent, hero);

    return `|HERO| travels ${distance}miles. ${flavorText}`;
}

function handleFinaleEvent(hero) {
    const finaleEvent = codeRetriever.findQuest(hero.currentQuestCode).finaleEvent;
    const flavorText = takeFinalePath(finaleEvent, hero);

    return `FINALE: ${flavorText}`;
}

module.exports = {
    handleChapterEvent,
    handleFinaleEvent,
}

function getHealthChangeAmount(changeMin, changeMax) {
    const damageHappens = boolUtil.allHaveValues([changeMin, changeMax])
        && changeMin >= 0
        && changeMax > 0;
    if (damageHappens) {
        return randomUtil.pickRandomNumber(changeMin, changeMax);
    } else {
        return 0;
    }
}

function applyChapterChange(path, hero) {
    const damage = getHealthChangeAmount(path.damageMin, path.damageMax);
    const heal = getHealthChangeAmount(path.healMin, path.healMax);

    let changeText;
    if (damage > 0) {
        hero.hp -= damage;
        changeText = `They lose ${damage}hp.`
    } else if (heal > 0) {
        hero.hp += heal;
        changeText = `They heal ${heal}hp.`
    } else if (boolUtil.hasValue(path.item)) {
        hero.item = path.item;
        changeText = `They equip ${path.item}.`
    } else if (boolUtil.hasValue(path.ally)) {
        hero.ally = path.ally;
        changeText = `${path.ally} joins the party.`
    } else {
        changeText = "They are unaffected.";
    }
    return changeText;
}

function applyFinaleChange(path, hero) {
    const damage = getHealthChangeAmount(path.damageMin, path.damageMax);

    let changeText;
    if (damage > 0) {
        hero.hp -= damage;
        changeText = `They lose ${damage}hp.`
    } else {
        changeText = "They are unaffected.";
    }
    return changeText;
}

function addDistance(event, hero) {
    const distance = randomUtil.pickRandomNumber(event.distanceMin, event.distanceMax);
    hero.distanceTravelled += distance;
    hero.distanceTravelledTotal += distance;
    return distance;
}

function pickPath(event, hero) {
    return event.paths.find((path) => {
        return trigger.triggersActivated(path.triggers, hero);
    });
}

function takeChapterPath(chapterEvent, hero) {
    const path = pickPath(chapterEvent, hero);
    const changeText = applyChapterChange(path, hero);
    return `${path.text} ${changeText}`;
}

function takeFinalePath(chapterEvent, hero) {
    const path = pickPath(chapterEvent, hero);
    const changeText = applyFinaleChange(path, hero);
    return `${path.text} ${changeText}`;
}