const randomUtil = require("../utilities/random.util");
const TunnelGoonsConstants = require("./constants");
const NameConstants = require("../constants/words/names")

async function makeOne(options) {
    try {
        return generateTunnelGoon(options);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    makeOne,
}

function generateDefaultTunnelGoon() {
    const firstName = randomUtil.pickRandom(NameConstants.FIRSTNAMES);
    const lastName = randomUtil.pickRandom(NameConstants.LASTNAMES);
    const portrait = randomUtil.pickRandom(TunnelGoonsConstants.PORTRAITS);
    const characterName = `${firstName} ${lastName}`;
    const playerName = "Not Provided";
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
        portrait,
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

    if (options) {
        if (options.playerName) {
            tunnelGoon.playerName = options.playerName;
        }
        if (options.characterName) {
            tunnelGoon.characterName = options.characterName;
        }
        if (options.portrait) {
            tunnelGoon.portrait = options.portrait;
        }
    }

    // variable starter stats
    const cloakColor = randomUtil.pickRandom(TunnelGoonsConstants.CLOAK_COLORS);
    const cloak = `${cloakColor} cloak`;
    const choiceItem = randomUtil.pickRandom(TunnelGoonsConstants.GENERIC_ITEMS);
    tunnelGoon.items.push(cloak);
    tunnelGoon.items.push(choiceItem);

    // roll for random traits
    resolveRandomTrait(TunnelGoonsConstants.CHILDHOODS, "Childhood", tunnelGoon);
    resolveRandomTrait(TunnelGoonsConstants.PROFESSIONS, "Profession", tunnelGoon);
    resolveRandomTrait(TunnelGoonsConstants.WARTIME, "During the War", tunnelGoon);

    // finalize settings
    tunnelGoon.currentInventoryScore = tunnelGoon.items.length;
    return tunnelGoon;
}

function resolveRandomTrait(availableTraits, traitName, goon) {
    if (!availableTraits || !traitName || availableTraits.length === 0) {
        return;
    }

    const trait = randomUtil.pickRandom(availableTraits);

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
