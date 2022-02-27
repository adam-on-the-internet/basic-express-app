const randomUtil = require("../utilities/random.util");
const TunnelGoonsConstants = require("./constants");

async function makeOneRandom() {
    try {
        const portrait = "https://opengameart.org/sites/default/files/trappedmonster-003.png";
        const characterName = "Goony McGoonface";
        const playerName = "Me";
        const startingLevel = 1;
        const startingHealthPoints = 10;
        const startingInventoryScore = 8;
        const brute = 0;
        const skulker = 0;
        const erudite = 0;
        const startingItems = [
            "2 rations",
            "_color of player choice_ cloak",
            "_item of player choice_"
        ];
        const items = [
            ...startingItems,
        ];
        const traits = [];
        const notes = [];

        const goon = {
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

        resolveRandomTrait(TunnelGoonsConstants.CHILDHOODS, "Childhood", goon);
        resolveRandomTrait(TunnelGoonsConstants.PROFESSIONS, "Profession", goon);
        resolveRandomTrait(TunnelGoonsConstants.WARTIME, "During the War", goon);

        goon.currentInventoryScore = goon.items.length;
        return goon;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    makeOneRandom,
}

function resolveRandomTrait(availableTraits, traitName, goon) {
    if (!availableTraits || !traitName || availableTraits.length === 0) {
        return;
    }

    const trait = randomUtil.pickRandom(availableTraits);

    // add Trait Text
    let detailsText = "";
    if (trait.item) {
        detailsText += trait.item;
    }
    if (trait.stat) {
        if (detailsText !== "") {
            detailsText += ", ";
        }
        if (trait.stat === "B") {
            detailsText += "1 Brute"
        } else if (trait.stat === "S") {
            detailsText += "1 Skulker";
        } else if (trait.stat === "E") {
            detailsText += "1 Erudite";
        }
    }
    const fullDetailsText = detailsText === "" ? "" : ` (${detailsText})`;
    const fullTraitText = traitName + ": " + trait.text + fullDetailsText;
    goon.traits.push(fullTraitText);

    // resolve Trait Stat
    if (trait.stat === "B") {
        goon.brute += 1;
    } else if (trait.stat === "S") {
        goon.skulker += 1;
    } else if (trait.stat === "E") {
        goon.erudite += 1;
    }

    // resolve Trait Item
    if (trait.item) {
        goon.items.push(trait.item);
    }
}
