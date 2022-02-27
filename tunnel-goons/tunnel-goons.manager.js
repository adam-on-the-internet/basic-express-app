const randomUtil = require("../utilities/random.util");
const TunnelGoonsConstants = require("./constants");
const NameConstants = require("../constants/words/names")

async function makeOneRandom() {
    try {
        return generateTunnelGoon();
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    makeOneRandom,
}

function generateTunnelGoon() {
    // variable starter stats
    const firstName = randomUtil.pickRandom(NameConstants.FIRSTNAMES);
    const lastName = randomUtil.pickRandom(NameConstants.LASTNAMES);
    const characterName = `${firstName} ${lastName}`;
    const portrait = randomUtil.pickRandom(TunnelGoonsConstants.PORTRAITS);
    const cloakColor = randomUtil.pickRandom(TunnelGoonsConstants.CLOAK_COLORS);
    const cloak = `${cloakColor} cloak`;
    const choiceItem = randomUtil.pickRandom(TunnelGoonsConstants.GENERIC_ITEMS);
    const playerName = "Not Provided";

    // consistent starter stats
    const startingLevel = 1;
    const startingHealthPoints = 10;
    const startingInventoryScore = 8;
    const brute = 0;
    const skulker = 0;
    const erudite = 0;
    const items = [
        "2 rations",
        cloak,
        choiceItem
    ];
    const traits = [];
    const notes = [];

    const tunnelGoon = {
        characterName,
        playerName,
        level: startingLevel,
        maxHealthPoints: startingHealthPoints,
        currentHealthPoints: startingHealthPoints,
        maxInventoryScore: startingInventoryScore,
        currentInventoryScore: items.length,
        brute: brute,
        skulker: skulker,
        erudite: erudite,
        portrait,
        items,
        traits,
        notes,
        isGoon: true,
        createdDate: new Date(),
    };

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
