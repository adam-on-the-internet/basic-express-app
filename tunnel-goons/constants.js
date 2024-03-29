const PROFESSIONS = [
    {
        code: 1,
        text: "Caravan Drifter",
        stat: "S",
        item: "Parasol",
    },
    {
        code: 2,
        text: "Botany Priest",
        stat: "E",
        item: "Rose Incense",
    },
    {
        code: 3,
        text: "Slab Dragger",
        stat: "B",
        item: "Black Mallet",
    },
    {
        code: 4,
        text: "Lock Snipe",
        stat: "S",
        item: "Lock Pick",
    },
    {
        code: 5,
        text: "Library Guide",
        stat: "E",
        item: "Lantern",
    },
    {
        code: 6,
        text: "Pit Warden",
        stat: "B",
        item: "Tusk Spear",
    },
];

const DURING_THE_WAR = [
    {
        code: 1,
        text: "Join the militia",
        item: "Shield",
    },
    {
        code: 2,
        text: "Went underground",
        item: "Torch",
    },
    {
        code: 3,
        text: "Joined the rebels",
        item: "Bear trap",
    },
    {
        code: 4,
        text: "Fled",
        item: "Compass",
    },
    {
        code: 5,
        text: "Gathered intel",
        item: "Mirror",
    },
    {
        code: 6,
        text: "Profiteered",
        item: "An item of the player's choice",
    },
];

const CHILDHOODS = [
    {
        code: 1,
        text: "Desert Urchin",
        stat: "S",
        item: "Waterskin",
    },
    {
        code: 2,
        text: "Garden Acolyte",
        stat: "E",
        item: "Shovel",
    },
    {
        code: 3,
        text: "Wheel Rat",
        stat: "B",
        item: "Hammer",
    },
    {
        code: 4,
        text: "Smoke Scrub",
        stat: "S",
        item: "Rope",
    },
    {
        code: 5,
        text: "Book Fetch",
        stat: "E",
        item: "Quill & Ink",
    },
    {
        code: 6,
        text: "Gear Lark",
        stat: "B",
        item: "Crowbar",
    },
];

const CLOAK_COLORS = [
    "Red",
    "Blue",
    "Green",
    "Purple",
    "Grey",
    "Gold",
];

const GENERIC_ITEMS = [
    "Fishing Rod",
    "Wooden Stake",
    "Lucky Rock",
    "Empty Jar",
    "Locket",
    "Disguise",
];

const PORTRAITS = [
    "https://opengameart.org/sites/default/files/trappedmonster-003.png",
    "https://opengameart.org/sites/default/files/koboldwizard-003_0.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_1.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_2.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_3.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_4.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_5.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_6.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_7.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_8.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_9.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/monster_10.PNG",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_biker_dog.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_cow_person.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_fergus.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_demon1.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_demon2.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_meat_pie.jpg",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_wanderer.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/hps_wanderer.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin1.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin2.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin3.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin4.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin5.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin6.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin7.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin8.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin9.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin10.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin11.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin12.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin13.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin14.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin15.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin16.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin17.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin18.png",
    "https://blissful-newton-edf9e2.netlify.app/assets/random-monsters/robin19.png",
];

module.exports = {
    PROFESSIONS,
    DURING_THE_WAR,
    CHILDHOODS,
    CLOAK_COLORS,
    GENERIC_ITEMS,
    PORTRAITS,
};
