const mongoose = require('mongoose');
require('./TunnelGoon.model');
const TunnelGoon = mongoose.model('tunnelGoon');

const randomUtil = require("../utilities/random.util");
const TunnelGoonsConstants = require("./constants");
const NameConstants = require("../constants/words/names")

async function getAll() {
    return new Promise((resolve, reject) => {
        TunnelGoon.find({})
            .then((tunnelGoonDTOs) => {
                const tunnelGoons = polishMany(tunnelGoonDTOs);
                resolve(tunnelGoons);
            });
    });
}

async function getOne(id) {
    return new Promise((resolve, reject) => {
        TunnelGoon.findOne({
            _id: id
        })
            .then((tunnelGoonDTO) => {
                if (tunnelGoonDTO) {
                    const tunnelGoons = polishOne(tunnelGoonDTO);
                    resolve(tunnelGoons);
                } else {
                    resolve(tunnelGoonDTO);
                }
            });
    });
}

async function makeOne(options) {
    return new Promise((resolve, reject) => {
        const tunnelGoon = generateTunnelGoon(options);
        const errors = checkForErrors(tunnelGoon);
        if (errors.length > 0) {
            reject(errors);
        } else {
            new TunnelGoon(tunnelGoon)
                .save()
                .then((tunnelGoonDTO) => {
                    resolve(tunnelGoonDTO);
                });
        }
    });
}

function deleteOne(id) {
    return new Promise((resolve, reject) => {
        TunnelGoon.deleteOne({
            _id: id
        })
            .then(() => {
                resolve({
                    message: `Tunnel Goon with given id deleted or never existed`
                });
            });
    });
}

module.exports = {
    getAll,
    getOne,
    makeOne,
    deleteOne,
}

function polishOne(tg) {
    return {
        ...tg._doc,
        currentInventoryScore: tg.items.length
    };
}

function polishMany(tunnelGoons) {
    return tunnelGoons.map((tg) => {
        return polishOne(tg);
    });
}

function checkForErrors(tunnelGoon) {
    // TODO add catching any errors here?
    return [];
}

function generateDefaultTunnelGoon() {
    const firstName = randomUtil.pickRandom(NameConstants.FIRSTNAMES);
    const lastName = randomUtil.pickRandom(NameConstants.LASTNAMES);
    const portraitURL = randomUtil.pickRandom(TunnelGoonsConstants.PORTRAITS);
    const characterName = `${firstName} ${lastName}`;
    const playerName = null;
    const startingLevel = 1;
    const startingHealthPoints = 10;
    const startingInventoryScore = 8;
    const startingItems = [
        "2 rations",
    ];
    const traits = [];
    const notes = [];
    return {
        characterName,
        playerName,
        portraitURL,
        level: startingLevel,
        brute: 0,
        skulker: 0,
        erudite: 0,
        maxHealthPoints: startingHealthPoints,
        currentHealthPoints: startingHealthPoints,
        maxInventoryScore: startingInventoryScore,
        currentInventoryScore: startingItems.length,
        items: startingItems,
        traits,
        notes,
        createdDate: new Date(),
    };
}

function generateTunnelGoon(options) {
    const tunnelGoon = generateDefaultTunnelGoon();

    let cloakColor = randomUtil.pickRandom(TunnelGoonsConstants.CLOAK_COLORS);
    let choiceItem = randomUtil.pickRandom(TunnelGoonsConstants.GENERIC_ITEMS);
    let childhoodCode = null;
    let professionCode = null;
    let duringTheWarCode = null;

    // handle manual override options
    if (options) {
        if (options.playerName) {
            tunnelGoon.playerName = options.playerName;
        }
        if (options.characterName) {
            tunnelGoon.characterName = options.characterName;
        }
        if (options.portraitURL) {
            tunnelGoon.portraitURL = options.portraitURL;
        }
        if (options.cloakColor) {
            cloakColor = options.cloakColor;
        }
        if (options.choiceItem) {
            choiceItem = options.choiceItem;
        }
        if (options.childhoodCode) {
            childhoodCode = options.childhoodCode;
        }
        if (options.professionCode) {
            professionCode = options.professionCode;
        }
        if (options.duringTheWarCode) {
            duringTheWarCode = options.duringTheWarCode;
        }
    }

    // variable starter stats
    const cloak = `${cloakColor} cloak`;
    tunnelGoon.items.push(cloak);
    tunnelGoon.items.push(choiceItem);

    // roll for random traits
    resolveRandomTrait(TunnelGoonsConstants.CHILDHOODS, "Childhood", childhoodCode, tunnelGoon);
    resolveRandomTrait(TunnelGoonsConstants.PROFESSIONS, "Profession", professionCode, tunnelGoon);
    resolveRandomTrait(TunnelGoonsConstants.DURING_THE_WAR, "During the War", duringTheWarCode, tunnelGoon);

    // finalize settings
    tunnelGoon.currentInventoryScore = tunnelGoon.items.length;
    return tunnelGoon;
}

function applyTrait(trait, goon, traitName) {
    let detailsText = "";

    // handle Item
    if (trait.item) {
        if (trait.item === "An item of the player's choice") {
            const defaultItem = randomUtil.pickRandom(TunnelGoonsConstants.GENERIC_ITEMS);
            detailsText += trait.item + " [example: " + defaultItem + "]";
            goon.items.push(defaultItem);
        } else {
            detailsText += trait.item;
            goon.items.push(trait.item);
        }
    }

    // handle Stat
    if (trait.stat) {
        if (detailsText !== "") {
            detailsText += ", ";
        }
        if (trait.stat === "B") {
            goon.brute += 1;
            detailsText += "1 Brute"
        } else if (trait.stat === "S") {
            detailsText += "1 Skulker";
            goon.skulker += 1;
        } else if (trait.stat === "E") {
            detailsText += "1 Erudite";
            goon.erudite += 1;
        }
    }

    // finish by resolving Text
    const fullDetailsText = detailsText === "" ? "" : ` (${detailsText})`;
    const fullTraitText = traitName + ": " + trait.text + fullDetailsText;
    goon.traits.push(fullTraitText);
}

function resolveRandomTrait(availableTraits, traitName, overrideCode, goon) {
    if (!availableTraits || !traitName || availableTraits.length === 0) {
        return;
    }

    let trait = randomUtil.pickRandom(availableTraits);
    if (overrideCode) {
        const selectedTrait = availableTraits.find((searchTrait) => {
            return overrideCode && searchTrait.code &&
                overrideCode.toString() === searchTrait.code.toString();
        });
        if (selectedTrait) {
            trait = selectedTrait;
        } else {
            console.log("Invalid Override Code Given");
        }
    }

    applyTrait(trait, goon, traitName);
}
