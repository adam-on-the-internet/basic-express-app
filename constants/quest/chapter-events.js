const EventTypes = require('./event-types');
const MoveTypes = require('./move-types');
const Items = require('./hero-items');
const Allies = require('./hero-allies');
const Adv = require('./hero-advantages');
const Dis = require('./hero-disadvantages');

const FLAVOR_EVENTS = [
    {
        name: "Pet the Dog",
        intro: "{HERO_FIRST} walks by a traveller with a dog. With permission, they pet the dog.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "The Strange Aura",
        intro: "{HERO_FIRST} feels a strange aura as they pass an ancient obelisk. They decide it is better to ignore for now.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Princess",
        intro: "{HERO_FIRST} walks past a Bard who tells them the news, apparently the Prince has a new Princess.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Chain Mail",
        intro: "{HERO_FIRST} walks past a Bard who tells them the news, chain mail is the new high fashion.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Stars",
        intro: "{HERO_FIRST} walks past a Bard who tells them the news, there are reports that the stars are fake.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: World",
        intro: "{HERO_FIRST} walks past a Bard who tells them the news, supposedly the world is round.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Demon",
        intro: "{HERO_FIRST} walks past a Bard who tells them the news, rumor has it the King is actually a demon.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Science",
        intro: "{HERO_FIRST} walks past a Bard who tells them the news, scientists have invented a {RA} {RN}.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Politics",
        intro: "{HERO_FIRST} walks past a Bard who tells them the news, the King has declared that {RN} is {RA}.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Weather",
        intro: "{HERO_FIRST} walks past a Bard who tells them the weather, it is {WEATHER} right now.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "News: Discovery",
        intro: "{HERO_FIRST} walks past a Bard who tells them about the recent discovery of a {RA} creature.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "Fortune Teller",
        intro: "{HERO_FIRST} encounters a fortune teller who predicts they will have a {RA} day.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "Rock Art",
        intro: "{HERO_FIRST} examines rock carvings as they pass through a cave. They carve their name into the cave wall.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "Pleasant View",
        intro: "{HERO_FIRST} stops for a moment and enjoys the view as they pass through a valley.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "No Time for a Festival",
        intro: "{HERO_FIRST} notices an exciting festival near their path! But they're on a mission, so they keep moving.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "Bzzzzzz",
        intro: "{HERO_FIRST} hears a buzzing in the trees nearby. They keep walking, not eager to get stung.",
        type: EventTypes.FLAVOR,
    },
    {
        name: "Whose Goat?",
        intro: "{HERO_FIRST} finds a {RA} goat wandering in their path. They pet the goat and carry on.",
        type: EventTypes.FLAVOR,
    },
];
const DIRECT_EVENTS = [
    {
        name: "Stray Cat",
        intro: "As they walk, {HERO_FIRST} notices a stray cat.",
        damageMin: 4,
        damageMax: 8,
        text: "The cat accepts pets for a moment, then bites {HERO_FIRST}.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Trip and Fall",
        intro: "{HERO_FIRST} gets distracted as they walk.",
        damageMin: 5,
        damageMax: 7,
        text: "{HERO_FIRST} trips and falls hard.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Find a Small Key",
        intro: "{HERO_FIRST} spots something shiny in the grass.",
        item: Items.SMALL_KEY,
        text: "{HERO_FIRST} feels around the grass and finds a SMALL KEY.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Find a Lost Child",
        intro: "{HERO_FIRST} finds a child wandering around the forest.",
        ally: Allies.LOST_CHILD,
        text: "{HERO_FIRST} decides to invite the LOST CHILD to come with them.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Find Dice",
        intro: "{HERO_FIRST} notices some loose dirt along the path.",
        item: Items.DICE,
        text: "{HERO_FIRST} digs at the loose dirt and finds DICE buried.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Red Berries",
        intro: "{HERO_FIRST} spots a Red Berry Bush near the path. They pick a handful.",
        healMin: 4,
        healMax: 7,
        text: "{HERO_FIRST} eats a handful of the nutritious Red Berries.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Maroon Berries",
        intro: "{HERO_FIRST} spots a Red Berry Bush near the path. They pick a handful.",
        damageMin: 4,
        damageMax: 7,
        text: "{HERO_FIRST} eats some berries, not realizing they were poisonous Maroon Berries, not Red Berries.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Fountain of the Gods",
        intro: "{HERO_FIRST} reaches a huge fountain surrounded by majestic statues.",
        healMin: 10,
        healMax: 20,
        text: "{HERO_FIRST} takes a drink from the fountain.",
        type: EventTypes.DIRECT,
    },
    {
        name: "ROCKSLIDE",
        intro: "{HERO_FIRST} feels a rumbling and turns towards the source, a nearby cliff.",
        damageMin: 5,
        damageMax: 25,
        text: "Boulders fall from the cliff, it's a rockslide! A few hit {HERO_FIRST}.",
        type: EventTypes.DIRECT,
    },
    {
        name: "Pit Trap",
        intro: "{HERO_FIRST} steps on a pile of leaves... wait...",
        damageMin: 10,
        damageMax: 20,
        text: "{HERO_FIRST} realizes their mistake as they land at the bottom of a pit trap.",
        type: EventTypes.DIRECT,
    },
];
const CHOICE_EVENTS = [
    {
        name: "Bean Offer",
        intro: "A cloaked figure offers {HERO_FIRST} a handful of beans.",
        type: EventTypes.CHOICE,
        choices: [
            {
                healMin: 2,
                healMax: 4,
                text: "{HERO_FIRST} accepts the beans. They make for a nice snack."
            },
            {
                text: "{HERO_FIRST} rejects the bean offer and continues walking."
            },
        ],
    },
    {
        name: "Forked Road",
        intro: "{HERO_FIRST} reaches a fork in the road, they can go East or West.",
        type: EventTypes.CHOICE,
        choices: [
            {
                text: "{HERO_FIRST} goes West towards some Spooky Woods."
            },
            {
                text: "{HERO_FIRST} goes East towards a Swampy River."
            },
        ],
    },
    {
        name: "Carnival",
        intro: "{HERO_FIRST} stops by a carnival near a small town.",
        type: EventTypes.CHOICE,
        choices: [
            {
                item: Items.TEDDY_BEAR,
                text: "{HERO_FIRST} plays Ring Toss and wins a TEDDY BEAR."
            },
            {
                ally: Allies.SAD_CLOWN,
                text: "{HERO_FIRST} watches a show and listens to a SAD CLOWN's story."
            },
            {
                text: "{HERO_FIRST} has some not-very-nutritious carnival snacks."
            },
        ],
    },
    {
        name: "Demon's Deal",
        intro: "{HERO_FIRST} reaches a Crossroads and is met by a Demon. The Demon offers a deal.",
        type: EventTypes.CHOICE,
        choices: [
            {
                text: "{HERO_FIRST} turns down the deal. The Demon is annoyed and disappears."
            },
            {
                distanceBoost: 20,
                expPoints: 20,
                damageMin: 10,
                damageMax: 20,
                text: "{HERO_FIRST} accepts the deal. The Demon takes some of their soul... for what?",
            },
        ],
    },
    {
        name: "Flower Garden",
        intro: "{HERO_FIRST} passes by a beautiful garden.",
        type: EventTypes.CHOICE,
        choices: [
            {
                expPoints: 20,
                text: "{HERO_FIRST} takes a moment to smell the roses."
            },
            {
                item: Items.BOUQUET,
                text: "{HERO_FIRST} picks some flowers to carry with them.",
            },
        ],
    },
    {
        name: "Swim Break",
        intro: "{HERO_FIRST} sits for a moment by a river.",
        type: EventTypes.CHOICE,
        choices: [
            {
                expPoints: 20,
                text: "{HERO_FIRST} decides to go for a swim. They have a pleasant swim.",
            },
            {
                damageMax: 5,
                damageMin: 10,
                text: "{HERO_FIRST} decides to go for a swim. As they get out, they notice they are covered in leeches.",
            },
            {
                text: "{HERO_FIRST} decides to just sit there and listen to the river flow.",
            },
        ],
    },
    {
        name: "The Coal Mine",
        intro: "{HERO_FIRST} notices a Coal Mine slightly off the path",
        type: EventTypes.CHOICE,
        choices: [
            {
                item: Items.ODD_GEM,
                expPoints: 20,
                text: "{HERO_FIRST} spends some time mining and finds an ODD GEM.",
            },
            {
                exp: 100,
                text: "{HERO_FIRST} spends some time mining and finds some diamonds. Nice!",
            },
            {
                exp: 100,
                text: "{HERO_FIRST} spends some time mining and helps unionize the miners. Cool!",
            },
            {
                exp: 1,
                text: "{HERO_FIRST} spends some time mining and finds some coal. Alright!",
            },
            {
                text: "{HERO_FIRST} decides to walk past the mine.",
            },
        ],
    },
];
const PATH_EVENTS = [
    {
        name: "Troll Bridge",
        intro: "As {HERO_FIRST} crosses a small bridge, a troll stops them.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    advantageReq: Adv.ATTRACTIVE,
                },
                text: "{HERO_FIRST} is so beautiful that the troll allows them to pass."
            },
            {
                triggers: {
                    wisdomReq: 7,
                },
                text: "{HERO_FIRST} is wise enough to trick the troll into letting them pass."
            },
            {
                damageMin: 6,
                damageMax: 9,
                text: "{HERO_FIRST} is tricked by the troll and gets hurt."
            }
        ],
    },
    {
        name: "Fairy",
        intro: "{HERO_FIRST} hears a whispering in the trees around them. They follow the voice and find a fairy.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    charismaReq: 7,
                },
                healMin: 6,
                healMax: 10,
                text: "{HERO_FIRST} convinces the fairy to heal them well."
            },
            {
                healMin: 3,
                healMax: 6,
                text: "The fairy heals {HERO_FIRST} a little bit."
            }
        ],
    },
    {
        name: "Chasm",
        intro: "{HERO_FIRST} reaches a chasm. The only way across is an old wooden bridge.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    dexterityReq: 7,
                },
                text: "{HERO_FIRST} is agile enough to cross the bridge swiftly."
            },
            {
                damageMin: 5,
                damageMax: 10,
                text: "{HERO_FIRST} falls while trying to cross the bridge."
            }
        ],
    },
    {
        name: "Worried Mother",
        intro: "{HERO_FIRST} passes by a Mother looking for her child.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    allyReq: Allies.LOST_CHILD,
                    loseAlly: true,
                },
                expPoints: 40,
                text: "{HERO_FIRST} reunites the Lost Child and their Mother."
            },
            {
                text: "{HERO_FIRST} will keep an eye out for any Lost Child."
            }
        ],
    },
    {
        name: "Gambling Travellers",
        intro: "{HERO_FIRST} finds a group of travellers gambling.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    itemReq: Items.DICE,
                    loseItem: false,
                },
                expPoints: 40,
                text: "{HERO_FIRST} has their own dice and wins decisively... are the dice loaded?"
            },
            {
                triggers: {
                    wisdomReq: 5,
                },
                expPoints: 30,
                text: "{HERO_FIRST} is clever enough to beat the others at the games."
            },
            {
                text: "{HERO_FIRST} loses at the games and is a bit demoralized."
            }
        ],
    },
    {
        name: "Training Camp",
        intro: "{HERO_FIRST} finds a group young adventurers training.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    itemReq: Items.WOODEN_SHIELD,
                    loseItem: true,
                },
                expPoints: 50,
                text: "{HERO_FIRST} trains with their Wooden Shield until it breaks."
            },
            {
                triggers: {
                    itemReq: Items.WOODEN_SWORD,
                    loseItem: true,
                },
                expPoints: 50,
                text: "{HERO_FIRST} trains with their Wooden Sword until it breaks."
            },
            {
                text: "{HERO_FIRST} watches some training before carrying on."
            }
        ],
    },
    {
        name: "The {RAFC} Goat Tavern",
        intro: "{HERO_FIRST} reaches The {RAFC} Goat Tavern.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    allyReq: Allies.BARD,
                    loseItem: false,
                },
                expPoints: 10,
                distanceBoost: 10,
                attackBoost: 1,
                defenseBoost: 1,
                healBoost: 1,
                text: "{HERO_FIRST} stops in the tavern for a drink, the Bard leads the crowd in a joyful song."
            },
            {
                triggers: {
                    allyReq: Allies.HUNTER,
                    loseItem: false,
                },
                expPoints: 10,
                attackBoost: 2,
                defenseBoost: 2,
                text: "{HERO_FIRST} stops in the tavern. The Hunter tells hunting stories to the crowd as they drink."
            },
            {
                expPoints: 10,
                text: "{HERO_FIRST} stops in the tavern for a drink."
            }
        ],
    },
    {
        name: "Orphanage",
        intro: "{HERO_FIRST} reaches an orphanage.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    advantageReq: Adv.BLESSED
                },
                expPoints: 50,
                text: "The blessed {HERO_FIRST} comforts a sick orphan and the orphan heals miraculously."
            },
            {
                triggers: {
                    itemReq: Items.TEDDY_BEAR,
                    loseItem: true,
                },
                expPoints: 40,
                text: "{HERO_FIRST} donates their Teddy Bear to orphanage."
            },
            {
                text: "{HERO_FIRST} passes by, unable to help the orphans."
            }
        ],
    },
    {
        name: "Lockbox",
        intro: "{HERO_FIRST} finds a small lockbox in their path.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    disadvantageReq: Dis.CURSED
                },
                damageMin: 20,
                damageMax: 30,
                text: "The box opens on its own for the cursed {HERO_FIRST}. A Demon emerges and attacks them."
            },
            {
                triggers: {
                    itemReq: Items.SMALL_KEY,
                    loseItem: false,
                },
                expPoints: 35,
                healMin: 10,
                healMax: 20,
                text: "{HERO_FIRST} uses their small key and opens it, uncovering a Healing Potion."
            },
            {
                triggers: {
                    strengthReq: 7
                },
                expPoints: 35,
                healMin: 10,
                healMax: 20,
                text: "{HERO_FIRST} uses their strength to force the box open, uncovering a Healing Potion."
            },
            {
                text: "{HERO_FIRST} is unable to open the box so they leave it in the path."
            }
        ],
    },
    {
        name: "Suspicious Creature",
        intro: "{HERO_FIRST} notices a suspicious creature with {RA} claws following them. The creature tackles them to the ground.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    charismaReq: 7,
                },
                text: "{HERO_FIRST} talks smoothly and convinces the creature to let them go."
            },
            {
                triggers: {
                    charismaReq: 6,
                },
                damageMin: 1,
                damageMax: 3,
                text: "{HERO_FIRST} talks smoothly and convinces the creature to let them go after a few scratches."
            },
            {
                triggers: {
                    charismaReq: 5,
                },
                damageMin: 3,
                damageMax: 8,
                text: "{HERO_FIRST} begs for mercy as the creature scratches them. The creature eventually yields."
            },
            {
                damageMin: 8,
                damageMax: 11,
                text: "{HERO_FIRST} is scratched by the creature for a few minutes before a loud noise scares the creature off."
            }
        ],
    },
    {
        name: "The Royal Parade",
        intro: "{HERO_FIRST} passes by a carriage containing some members of the royal court.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    charismaReq: 7,
                },
                healMin: 5,
                healMax: 10,
                text: "{HERO_FIRST} presents himself well to the parade. The royalty sends a guard to heal them."
            },
            {
                triggers: {
                    charismaReq: 5,
                },
                text: "{HERO_FIRST} presents himself decently to the parade."
            },
            {
                damageMin: 3,
                damageMax: 8,
                text: "{HERO_FIRST} presents himself poorly to the parade and the royal guards push him away."
            },
        ],
    },
    {
        name: "The Graveyard",
        intro: "{HERO_FIRST} passes by a graveyard.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    wisdomReq: 10,
                },
                criticalBoost: 5,
                healBoost: 5,
                defenseBoost: 5,
                distanceBoost: 5,
                attackBoost: 5,
                text: "{HERO_FIRST} pays respect to the Heroes who have fallen before him, knowing their history."
            },
            {
                triggers: {
                    wisdomReq: 5,
                },
                criticalBoost: 2,
                healBoost: 2,
                defenseBoost: 2,
                distanceBoost: 2,
                attackBoost: 2,
                text: "{HERO_FIRST} recognizes a few names and pays respect to the dead."
            },
            {
                text: "{HERO_FIRST} looks at some graves but does not recognize any names."
            },
        ],
    },
    {
        name: "The Sad Person",
        intro: "{HERO_FIRST} passes by a sad person.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    charismaReq: 10,
                },
                criticalBoost: 10,
                healBoost: 10,
                text: "{HERO_FIRST} cheers up the sad person, now they are having a great day."
            },
            {
                triggers: {
                    charismaReq: 5,
                },
                criticalBoost: 5,
                healBoost: 5,
                text: "{HERO_FIRST} talks to them and puts a smile on their face."
            },
            {
                criticalBoost: -5,
                text: "{HERO_FIRST} feels sad just seeing them."
            },
        ],
    },
    {
        name: "The Old Library",
        intro: "{HERO_FIRST} notices an Old Library and enters.",
        type: EventTypes.PATHS,
        paths: [
            {
                triggers: {
                    wisdomReq: 6,
                },
                item: Items.OLD_BOOK,
                text: "{HERO_FIRST} finds an OLD BOOK on an OLD SHELF."
            },
            {
                triggers: {
                    charismaReq: 6,
                },
                ally: Allies.LIBRARIAN,
                text: "{HERO_FIRST} meets a LIBRARIAN and gains their trust."
            },
            {
                text: "{HERO_FIRST} makes too much noise and is escorted out by the LIBRARIAN."
            },
        ],
    },
];
const ENCOUNTER_EVENTS = [
    {
        name: "Goblin Greeting",
        intro: "A goblin blocks the path ahead. {HERO_FIRST} prepares to fight.",
        enemyName: "Goblin",
        defeat: "{HERO_FIRST} has defeated the goblin!",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 10,
        enemyHpMax: 10,
        dexterity: 3,
        charisma: 3,
        wisdom: 3,
        strength: 6,
        moves: [
            {
                type: MoveTypes.HEAL,
                name: "GOBLIN SNACKS",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "GOBLIN PUNCH",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "GOBLIN ITCH",
            },
        ],
    },
    {
        name: "Hedgehog Hijinx",
        intro: "A hedgehog begins chasing after {HERO_FIRST}.",
        enemyName: "Hedgehog",
        defeat: "The hedgehog was not fast enough to beat {HERO_FIRST}!",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 10,
        enemyHpMax: 10,
        dexterity: 6,
        charisma: 3,
        wisdom: 3,
        strength: 3,
        moves: [
            {
                type: MoveTypes.HEAL,
                name: "HEDGEHOG HUDDLE",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "DASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "TORNADO",
                multiplier: 2,
            },
            {
                type: MoveTypes.FAIL,
                name: "RUN IN PLACE",
            },
        ],
    },
    {
        name: "Fire Wizard",
        intro: "A fireball flies in front of {HERO_FIRST}. There's a Fire Wizard nearby!",
        enemyName: "Fire Wizard",
        defeat: "{HERO_FIRST} has defeated the wizard!",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 10,
        enemyHpMax: 10,
        dexterity: 3,
        charisma: 3,
        wisdom: 6,
        strength: 3,
        moves: [
            {
                type: MoveTypes.HEAL,
                name: "HEALING FLAME",
                multiplier: 2,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "FIRE BALL",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "FIRE BALL",
                multiplier: 2,
            },
            {
                type: MoveTypes.FAIL,
                name: "READ SPELL BOOK",
            },
            {
                type: MoveTypes.FAIL,
                name: "RECHARGE MAGIC",
            },
        ],
    },
    {
        name: "Tricky Trickster",
        intro: "{HERO_FIRST} hears a menacing laugh. There's a Trickster nearby!",
        enemyName: "Trickster",
        defeat: "{HERO_FIRST} has defeated the trickster! Or did they?",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 10,
        enemyHpMax: 10,
        dexterity: 3,
        charisma: 3,
        wisdom: 3,
        strength: 6,
        moves: [
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "HURTFUL JOKE",
                multiplier: 1,
            },
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "DANGEROUS PRANK",
                multiplier: 2,
            },
            {
                type: MoveTypes.FAIL,
                name: "TAUNT",
            },
            {
                type: MoveTypes.FAIL,
                name: "LAUGH",
            },
        ],
    },
    {
        name: "Bear Battle",
        intro: "{HERO_FIRST} hears a roar in the woods nearby. There is a bear!",
        enemyName: "Bear",
        defeat: "{HERO_FIRST} has defeated the bear!",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 6,
        enemyHpMax: 6,
        dexterity: 7,
        charisma: 1,
        wisdom: 1,
        strength: 7,
        moves: [
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "CLAW SWIPE",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "BEAR RUSH",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "ROAR",
            },
        ],
    },
    {
        name: "Spirit Smash",
        intro: "{HERO_FIRST} feels a presence. There is a Spirit nearby!",
        enemyName: "Spirit",
        defeat: "{HERO_FIRST} has defeated the Spirit!",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 20,
        enemyHpMax: 20,
        dexterity: 8,
        charisma: 1,
        wisdom: 8,
        strength: 1,
        moves: [
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "GHASTLY TRICK",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "GHASTLY SPIN",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "GHASTLY VISION",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "REVEAL DARK SECRET",
                multiplier: 3,
            },
            {
                type: MoveTypes.FAIL,
                name: "MOAN",
            },
        ],
    },
    {
        name: "Lizard Attack",
        intro: "{HERO_FIRST} sees a lizard that appears very close. Wait, no, it is a far away Lizard that is Giant!",
        enemyName: "Giant Lizard",
        defeat: "{HERO_FIRST} has defeated the Giant Lizard!",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 20,
        enemyHpMax: 20,
        dexterity: 2,
        charisma: 3,
        wisdom: 4,
        strength: 8,
        moves: [
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "REPTILIAN TRICK",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "REPTILIAN SLASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "REPTILIAN TRAP",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "LIZARD LICK",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "LOSE TAIL",
            },
        ],
    },
    {
        name: "Medusa's Aunt",
        intro: "{HERO_FIRST} hears a hissing in some bushes. It's Medusa! No... It's Medusa's Aunt!",
        enemyName: "Medusa's Aunt",
        defeat: "{HERO_FIRST} has defeated Medusa's Aunt!",
        type: EventTypes.ENCOUNTER,
        expPoints: 30,
        enemyHpStart: 30,
        enemyHpMax: 35,
        dexterity: 3,
        charisma: 5,
        wisdom: 5,
        strength: 5,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "TAIL WHIP",
                multiplier: 1,
            },
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "STONEY KISS",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "LEGENDARY SLASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "STONEY STARE",
                multiplier: 2,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "STONEY HIT",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "SNAKE DISCUSSION",
            },
            {
                type: MoveTypes.HEAL,
                name: "UNGODLY HEAL",
                multiplier: 2,
            },
        ],
    },
    {
        name: "INVISIBLE ENEMY",
        intro: "{HERO_FIRST} feels a tap on their shoulder, but they see no one. There must be an invisible enemy!",
        enemyName: "Invisible Enemy",
        defeat: "{HERO_FIRST} has defeated an Invisible Enemy... they think. Hard to be sure.",
        type: EventTypes.ENCOUNTER,
        expPoints: 20,
        enemyHpStart: 15,
        enemyHpMax: 15,
        dexterity: 5,
        charisma: 1,
        wisdom: 1,
        strength: 1,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "UNSEEN PUNCH",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "INVISIBLE SHOVE",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "HIDDEN KICK",
                multiplier: 2,
            },
        ],
    },
    {
        name: "SHACKLED GHOUL",
        intro: "{HERO_FIRST} hears clanking chains and notices shackles floating towards them.",
        enemyName: "Shackled Ghoul",
        defeat: "{HERO_FIRST} watches as the shackles fall to the ground. The ghoul is gone.",
        type: EventTypes.ENCOUNTER,
        expPoints: 25,
        enemyHpStart: 20,
        enemyHpMax: 20,
        dexterity: 1,
        charisma: 1,
        wisdom: 4,
        strength: 4,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "SHACKLE TOSS",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "DREADFUL DANCE",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "SHACKLED PUNCH",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "SHACKLES TIGHTEN",
            },
        ],
    },
    {
        name: "WINGED FURY",
        intro: "{HERO_FIRST} hears a flapping and notices a fury flying towards them.",
        enemyName: "Winged Fury",
        defeat: "{HERO_FIRST} returns the fury to the underworld.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 10,
        expPoints: 100,
        enemyHpStart: 50,
        enemyHpMax: 50,
        dexterity: 5,
        charisma: 5,
        wisdom: 5,
        strength: 3,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "SWOOPING SWIPE",
                multiplier: 1,
            },
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "PAINFUL LURE",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "CALCULATED DIVE",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "ENRAGED KICK",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "VENGEFUL THOUGHTS",
            },
            {
                type: MoveTypes.FAIL,
                name: "SCREECH",
            },
            {
                type: MoveTypes.HEAL,
                name: "NECTAR OF THE GODS",
                multiplier: 2,
            },
        ],
    },
    {
        name: "MINOTAUR",
        intro: "{HERO_FIRST} notices a ball of twine. As they reach for it, they notice a Minotaur.",
        enemyName: "the Minotaur",
        defeat: "{HERO_FIRST} returns the Minotaur to their maze.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 10,
        expPoints: 60,
        enemyHpStart: 35,
        enemyHpMax: 35,
        dexterity: 10,
        charisma: 1,
        wisdom: 1,
        strength: 10,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "BULL RUSH",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "BODY SLAM",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "ROAR",
            },
            {
                type: MoveTypes.FAIL,
                name: "TELL LENGTHY BACKSTORY",
            },
            {
                type: MoveTypes.HEAL,
                name: "NECTAR OF THE GODS",
                multiplier: 2,
            },
        ],
    },
    {
        name: "Green Ooze",
        intro: "{HERO_FIRST} notices a slimy trail. They follow it to some Green Ooze",
        enemyName: "Green Ooze",
        defeat: "{HERO_FIRST} dissolves the Ooze.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 5,
        expPoints: 30,
        enemyHpStart: 15,
        enemyHpMax: 150,
        dexterity: 3,
        charisma: 1,
        wisdom: 1,
        strength: 6,
        moves: [
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "ENGULF",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "ABSORB",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "DISSIPATE",
            },
            {
                type: MoveTypes.HEAL,
                name: "REFORM",
                multiplier: 1,
            },
        ],
    },
    {
        name: "{RAFC} Ooze",
        intro: "{HERO_FIRST} notices a slimy trail. They follow it to some {RAFC} Ooze",
        enemyName: "{RAFC} Ooze",
        defeat: "{HERO_FIRST} dissolves the {RAFC} Ooze.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 5,
        expPoints: 35,
        enemyHpStart: 20,
        enemyHpMax: 150,
        dexterity: 3,
        charisma: 1,
        wisdom: 1,
        strength: 6,
        moves: [
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} ENGULF",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "{RAC} ABSORB",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "{RAC} DISSIPATE",
            },
            {
                type: MoveTypes.HEAL,
                name: "{RAC} REFORM",
                multiplier: 1,
            },
        ],
    },
    {
        name: "{RAFC} Knight",
        intro: "{HERO_FIRST} hears a metal clanging. A {RAFC} Knight appears!",
        enemyName: "{RAFC} Knight",
        defeat: "{HERO_FIRST} defeats the {RAFC} Knight.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 6,
        expPoints: 40,
        enemyHpStart: 30,
        enemyHpMax: 30,
        dexterity: 3,
        charisma: 4,
        wisdom: 3,
        strength: 6,
        moves: [
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} STAB",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} JOUST",
                multiplier: 2,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "{RAC} CHARGE",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "{RAC} ARMOR ADJUSTMENT",
            },
        ],
    },
    {
        name: "{RAFC} Fighter",
        intro: "A {RAFC} Fighter jumps out in front of {HERO_FIRST}!",
        enemyName: "{RAFC} Fighter",
        defeat: "{HERO_FIRST} defeats the {RAFC} Fighter.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 10,
        expPoints: 45,
        enemyHpStart: 35,
        enemyHpMax: 35,
        dexterity: 3,
        charisma: 3,
        wisdom: 3,
        strength: 6,
        moves: [
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} PUNCH",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} UPPERCUT",
                multiplier: 2,
            },
            {
                type: MoveTypes.FAIL,
                name: "{RAC} RECOVERY",
            },
        ],
    },
    {
        name: "{RAFC} Golem",
        intro: "A {RAFC} Golem blocks the path of {HERO_FIRST}!",
        enemyName: "{RAFC} Golem",
        defeat: "{HERO_FIRST} defeats the {RAFC} Golem.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 10,
        expPoints: 45,
        enemyHpStart: 35,
        enemyHpMax: 35,
        dexterity: 3,
        charisma: 3,
        wisdom: 4,
        strength: 5,
        moves: [
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} SMASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} ROCKSLIDE",
                multiplier: 2,
            },
            {
                type: MoveTypes.FAIL,
                name: "{RAC} GROUNDING",
            },
        ],
    },
    {
        name: "{RAFC} Bandit",
        intro: "A {RAFC} Bandit stops {HERO_FIRST} in their tracks!",
        enemyName: "{RAFC} Bandit",
        defeat: "{HERO_FIRST} defeats the {RAFC} Bandit.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 3,
        expPoints: 30,
        enemyHpStart: 20,
        enemyHpMax: 20,
        dexterity: 5,
        charisma: 5,
        wisdom: 3,
        strength: 3,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "{RAC} SLASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "{RAC} TRICK",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "{RAC} TAUNT",
            },
        ],
    },
    {
        name: "{RAFC} Orb",
        intro: "A {RAFC} orb materializes into the path of {HERO_FIRST}!",
        enemyName: "{RAFC} Orb",
        defeat: "{HERO_FIRST} vanquishes the {RAFC} Orb.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 10,
        expPoints: 100,
        enemyHpStart: 100,
        enemyHpMax: 100,
        dexterity: 5,
        charisma: 1,
        wisdom: 5,
        strength: 1,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "{RAC} Wind Tunnel",
                multiplier: 1,
            },
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "{RAC} Glare",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "{RAC} Mind Blast",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "{RAC} Bump",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "{RAC} FADE",
            },
        ],
    },
    {
        name: "Grey Wolf",
        intro: "A Grey Wolf stops {HERO_FIRST} in their tracks!",
        enemyName: "Grey Wolf",
        defeat: "{HERO_FIRST} defeats the Grey Wolf.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 3,
        expPoints: 20,
        enemyHpStart: 15,
        enemyHpMax: 15,
        dexterity: 4,
        charisma: 4,
        wisdom: 2,
        strength: 4,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "CLAW SLASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "PUMMEL",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "HOWL AT THE MOON",
            },
        ],
    },
    {
        name: "Grey Ant",
        intro: "A Grey Ant bravely stands blocking {HERO_FIRST}'s path!",
        enemyName: "Grey Ant",
        defeat: "{HERO_FIRST} defeats the Grey Ant.",
        type: EventTypes.ENCOUNTER,
        distanceBoost: 1,
        expPoints: 1,
        enemyHpStart: 1,
        enemyHpMax: 1,
        dexterity: 1,
        charisma: 1,
        wisdom: 1,
        strength: 1,
        moves: [
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "CRAWL",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "EAT FRUIT",
            },
        ],
    },
    {
        name: "Medusa's Uncle",
        intro: "{HERO_FIRST} hears a hissing behind some barrels. It's Medusa! No... It's Medusa's Uncle!",
        enemyName: "Medusa's Uncle",
        defeat: "{HERO_FIRST} has defeated Medusa's Uncle!",
        type: EventTypes.ENCOUNTER,
        expPoints: 30,
        enemyHpStart: 30,
        enemyHpMax: 35,
        dexterity: 3,
        charisma: 5,
        wisdom: 5,
        strength: 5,
        moves: [
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "TAIL SWING",
                multiplier: 1,
            },
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "STOIC KISS",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "ANNOYING SLASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "GLARING STARE",
                multiplier: 2,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "ROCK-HARD HIT",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "SNAKE MEETING",
            },
            {
                type: MoveTypes.HEAL,
                name: "MYSTERIOUS HEAL",
                multiplier: 2,
            },
        ],
    },
    {
        name: "Lizard Attack 2",
        intro: "{HERO_FIRST} sees a lizard that appears very far away. Wait, no, it is a close Lizard that is Tiny!",
        enemyName: "Tiny Lizard",
        defeat: "{HERO_FIRST} has defeated the Tiny Lizard!",
        type: EventTypes.ENCOUNTER,
        expPoints: 10,
        enemyHpStart: 10,
        enemyHpMax: 10,
        dexterity: 4,
        charisma: 2,
        wisdom: 3,
        strength: 3,
        moves: [
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "REPTILIAN TRICK",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "REPTILIAN SLASH",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "REPTILIAN TRAP",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "LIZARD LICK",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "LOSE TAIL",
            },
        ],
    },
    {
        name: "Sandworm",
        intro: "The ground rumbles... a Sandworm pops out of the ground in front of {HERO_FIRST}!",
        enemyName: "Sandworm",
        defeat: "{HERO_FIRST} has sent the Sandworm back into the ground!",
        type: EventTypes.ENCOUNTER,
        expPoints: 30,
        enemyHpStart: 20,
        enemyHpMax: 20,
        dexterity: 4,
        charisma: 1,
        wisdom: 1,
        strength: 4,
        moves: [
            {
                type: MoveTypes.CHARISMA_ATTACK,
                name: "TERRIFYING ROAR",
                multiplier: 1,
            },
            {
                type: MoveTypes.DEXTERITY_ATTACK,
                name: "CHARGE",
                multiplier: 1,
            },
            {
                type: MoveTypes.WISDOM_ATTACK,
                name: "EARTHQUAKE",
                multiplier: 1,
            },
            {
                type: MoveTypes.STRENGTH_ATTACK,
                name: "BITE",
                multiplier: 1,
            },
            {
                type: MoveTypes.FAIL,
                name: "BRUSH TEETH",
            },
        ],
    },
    {
        name: "Boulder",
        intro: "The path ahead of {HERO_FIRST} is blocked by an angry-looking boulder!",
        enemyName: "Boulder",
        defeat: "{HERO_FIRST} chipped the Boulder into pieces!",
        type: EventTypes.ENCOUNTER,
        expPoints: 100,
        enemyHpStart: 100,
        enemyHpMax: 100,
        dexterity: 1,
        charisma: 1,
        wisdom: 1,
        strength: 1,
        moves: [
            {
                type: MoveTypes.FAIL,
                name: "BLOCK",
            },
        ],
    },
];

const CHAPTER_EVENTS = FLAVOR_EVENTS.concat(DIRECT_EVENTS, CHOICE_EVENTS, PATH_EVENTS, ENCOUNTER_EVENTS);

module.exports = {
    CHAPTER_EVENTS
}
