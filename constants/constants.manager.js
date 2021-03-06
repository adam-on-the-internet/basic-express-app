const WEAPONS = require('./clue/weapons');
const SCENES = require('./clue/scenes');
const CULPRITS = require('./clue/culprits');
const CLUE_BASES = require('./clue/clue-bases');
const TITLE_BASES = require('./clue/title-pieces');
const ANNOUNCEMENT_PIECES = require('./clue/announcement-pieces');

const NOUNS = require('./words/nouns');
const ADJECTIVES = require('./words/adjectives');

const STORY_PIECES = require('./story/story-pieces');

const QUEST_PIECES = require('./quest/quest-words');
const ITEMS = require('./quest/hero-items');
const ALLIES = require('./quest/hero-allies');
const RACES = require('./quest/hero-races');
const ADVANTAGES = require('./quest/hero-advantages');
const DISADVANTAGES = require('./quest/hero-disadvantages');
const QUEST_QUESTS = require('./quest/quests');
const QUEST_CHAPTER_EVENTS = require('./quest/chapter-events');
const HERO_MOVES = require('./quest/hero-moves');

module.exports = {
    WEAPONS: WEAPONS.WEAPONS,
    SCENES: SCENES.SCENES,
    CULPRITS: CULPRITS.CULPRITS,
    CLUE_BASES: CLUE_BASES,
    TITLE_BASES: TITLE_BASES,
    NOUNS: NOUNS.NOUNS,
    ADJECTIVES: ADJECTIVES.ADJECTIVES,
    STORY_PIECES: STORY_PIECES,
    QUEST_PIECES: QUEST_PIECES,
    HERO_MOVES: HERO_MOVES,
    RACES: RACES.ALL_RACES,
    ADVANTAGES: ADVANTAGES.ALL_ADV,
    STARTER_ALLIES: ALLIES.STARTER_ALLIES,
    STARTER_ITEMS: ITEMS.STARTER_ITEMS,
    DISADVANTAGES: DISADVANTAGES.ALL_DIS,
    QUEST_QUESTS: QUEST_QUESTS,
    QUEST_CHAPTER_EVENTS: QUEST_CHAPTER_EVENTS,
    ANNOUNCEMENT_PIECES: ANNOUNCEMENT_PIECES,
}
