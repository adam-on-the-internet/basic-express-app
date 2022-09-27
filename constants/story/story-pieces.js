const STORY_FOR_SYNONYMS = [
    "Thor: Love and {Thunder}",
    "Top {Gun}: Maverick",
    "{Top} Gun: Maverick",
    "All the {Old} Knives",
    "Jurassic World {Dominion}",
    "Minions: The {Rise} of Gru",
    "Number One Song in {Heaven}",
    "{Nope}",
    "Where the {Crawdads} Sing",
    "Where the Crawdads {Sing}",
    "{Death} on the Nile",
    "Better {Call} Saul",
    "{Monster} Prom",
    "Monster {Prom}",
    "{Breaking} Bad",
    "Breaking {Bad}",
    "{Lords} of Waterdeep",
    "{Big} Brain Academy",
    "Big Brain {Academy}",
    "Mage Wars: {Arena}",
    "Mage Wars: {Academy}",
    "Metroid: {Dread}",
    "{Ace} Attorney",
    "Ace {Attorney}",
    "Ace Attorney: {Spirit} of Justice",
    "Ace Attorney: Spirit of {Justice}",
    "Kirby: {Canvas} Curse",
    "Kirby: Canvas {Curse}",
    "Kirby's {Epic} Yarn",
    "Kiby's Epic {Yarn}",
    "Kirby and the {Forgotten} Land",
    "Kirby and the Forgotten {Land}",
    "Kirby and the {Amazing} Mirror",
    "Kirby and the Amazing {Mirror}",
    "Kirby and the Crystal {Shards}",
    "Kirby and the {Crystal} Shards",
    "{Everything} Everywhere All at Once",
    "Everything {Everywhere} All at Once",
    "One Night Ultimate {Werewolf}",
    "One {Night} Ultimate Werewolf",
    "One Night {Ultimate} Werewolf",
    "The Search for {Planet} X",
    "The {Search} for Planet X",
    "Elden {Ring}",
    "{Hollow} Knight",
    "Hollow {Knight}",
    "What We Do in the {Shadows}",
    "Wario {Land}",
    "Wario Land: {Shake} It",
    "Wario{ware}",
    "{Station} Eleven",
    "{Kingdom} Hearts",
    "Kingdom {Hearts}",
    "{Super} Monkey Ball",
    "Super {Monkey} Ball",
    "Super Monkey {Ball}",
    "The {Forgotten} City",
    "The Forgotten {City}",
    "The {Last} of Us",
    "{Blood}borne",
    "{Paper} Mario",
    "Metroid {Fusion}",
    "Ring Fit {Adventure}",
    "Doom {Patrol}",
    "{Doom} Patrol",
    "On {Cinema}",
    "I Think You Should {Leave}",
    "Curb Your {Enthusiasm}",
    "Masters of the {Universe}",
    "Paper Mario: The Origami {King}",
    "Army of the {Dead}",
    "{Army} of the Dead",
    "A {Series} of Unfortunate Events",
    "A Series of {Unfortunate} Events",
    "The {Little} Things",
    "The Little {Things}",
    "{Kill} Bill",
    "The {Green} Mile",
    "The Green {Mile}",
    "{People} of Earth",
    "People of {Earth}",
    "{Final} Destination",
    "Final {Destination}",
    "{Epic} Movie",
    "{Scary} Movie",
    "Howard the {Duck}",
    "Birds of {Prey}",
    "{Monster} Hunter",
    "Monster {Hunter}",
    "{Field} of Dreams",
    "The {Walking} Dead",
    "The Walking {Dead}",
    "In A {Sentimental} Mood",
    "In A Sentimental {Mood}",
    "Super Mario 3D {Land}",
    "Super Mario 3D {World}",
    "{Swamp} Thing",
    "Swamp {Thing}",
    "{Rhythm} Heaven",
    "Rhythm {Heaven}",
    "Gossip {Girl}",
    "{Gossip} Girl",
    "Among {Us}",
    "{Dungeons} & Dragons",
    "Dungeons & {Dragons}",
    "Super Mario {Sunshine}",
    "{Settlers} of Catan",
    "{Betrayal} at House on the Hill",
    "Betrayal at {House} on the Hill",
    "Betrayal at House on the {Hill}",
    "Of {Mice} and Men",
    "Of Mice and {Men}",
    "{Great} Expectations",
    "Some Like It {Hot}",
    "James Bond: The Man with the {Golden} Gun",
    "James Bond: The Man with the Golden {Gun}",
    "Indiana Jones and the {Temple} of Doom",
    "Indiana Jones and the Temple of {Doom}",
    "The {Great} Gatsby",
    "War and {Peace}",
    "{War} and Peace",
    "Pan's {Labyrinth}",
    "{Close} Encounters of the Third Kind",
    "The Lord of the Rings: The Return of the {King}",
    "The Lord of the Rings: The {Fellowship} of the Ring",
    "The Beauty and the {Beast}",
    "Live Free or Die {Hard}",
    "Live Free or {Die} Hard",
    "Live {Free} or Die Hard",
    "{Live} Free or Die Hard",
    "12 {Angry} Men",
    "{Young} Frankenstein",
    "Almost {Famous}",
    "Monty Python and the {Holy} Grail",
    "Monty Python and the Holy {Grail}",
    "The {Big} Lebowski",
    "The {Sound} of Music",
    "It's a {Wonderful} Life",
    "Gone With the {Wind}",
    "Night of the {Living} Dead",
    "{Night} of the Living Dead",
    "{Little} Miss Sunshine",
    "It's Always {Sunny} in Philadelphia",
    "Lara Croft: {Tomb} Raider",
    "The {Wizard} of Oz",
    "The Lion, the Witch, and the {Wardrobe}",
    "The Lion, the {Witch}, and the Wardrobe",
    "The {Cabinet} of Dr. Caligari",
    "{Mad} Max: Fury Road",
    "Call Me by Your {Name}",
    "A Streetcar Named {Desire}",
    "The {Magic} School Bus",
    "The Legend of Zelda: {Breath} of the Wild",
    "The Legend of Zelda: {Wind}waker",
    "The Legend of Zelda: A Link to the {Past}",
    "The Legend of Zelda: Ocarina of {Time}",
    "The Legend of Zelda: Majora's {Mask}",
    "{Super} Mario Brothers",
    "{Dark} Souls",
    "The Elder Scrolls V: {Sky}rim",
    "The {Elder} Scrolls V: Skyrim",
    "Red {Dead} Redemption",
    "Red Dead {Redemption}",
    "{Resident} Evil",
    "Resident {Evil}",
    "{Over}watch",
    "{Final} Fantasy VII",
    "Final {Fantasy} VII",
    "Guitar {Hero}",
    "{Silent} Hill",
    "Silent {Hill}",
    "The {Legend} of Zelda",
    "Castlevania: {Symphony} of the Night",
    "Castlevania: Symphony of the {Night}",
    "Super Smash Bros: {Melee}",
    "Super {Smash} Bros: Melee",
    "{League} of Legends",
    "The {Twilight} Zone",
    "The Twilight {Zone}",
    "Breaking {Bad}",
    "I {Love} Lucy",
    "{Arrested} Development",
    "{Parks} and Recreation",
    "Buffy the Vampire {Slayer}",
    "Buffy the {Vampire} Slayer",
    "Star Trek: The Next {Generation}",
    "Mister Rogers' {Neighborhood}",
    "{House} of Cards",
    "The {Secret} Garden",
    "The Secret {Garden}",
    "Jurassic {Park}",
    "{Pride} and Prejudice",
    "Pride and {Prejudice}",
    "2001: A Space {Odyssey}",
    "There Will Be {Blood}",
    "Singin' in the {Rain}",
    "The Truman {Show}",
    "{Lost} in Translation",
    "Lost in {Translation}",
    "{Taxi} Driver",
    "Taxi {Driver}",
    "Dr. Strangelove or: How I Learned to Stop Worrying and {Love} the Bomb",
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the {Bomb}",
    "The Blair {Witch} Project",
    "The Blair Witch {Project}",
    "The Texas Chain Saw {Massacre}",
    "Brave New {World}",
    "{Brave} New World",
    "Brave {New} World",
    "Charlotte's {Web}",
    "The Fault in Our {Stars}",
    "The Grapes of {Wrath}",
    "{Teen} Titans",
    "Howl's {Moving} Castle",
    "Howl's Moving {Castle}",
    "{Princess} Mononoke",
    "My {Neighbor} Totoro",
    "Kiki's {Delivery} Service",
    "Kiki's Delivery {Service}",
    "Nausicaä of the {Valley} of the Wind",
    "Nausicaä of the Valley of the {Wind}",
    "True {Detective}",
    "{True} Detective",
    "{Wonder} Woman",
    "{Toy} Story",
    "Toy {Story}",
    "Inside {Out}",
    "Ghost in the {Shell}",
    "{Ghost} in the Shell",
];
const TITLES = [
    "Of Mice and {N2}",
    "Of {N1} and Men",
    "Of {N1} and {N2}",
    "{A1} Expectations",
    "Sherlock Holmes and the Case of the {A1} {N1}",
    "Star Wars: Episode VI - {N1} of the Jedi",
    "Harry Potter and the Sorcerer's {N1}",
    "Percy Jackson and the {N1} Thief",
    "Mission: Impossible - {A1} {N1}",
    "Call of Duty: {A1} Warfare",
    "James Bond: From Russia with {N1}",
    "James Bond: The Man with the {A1} Gun",
    "James Bond: The Man with the Golden {N1}",
    "Indiana Jones and the {N1} of Doom",
    "Indiana Jones and the Kingdom of the {A1} {N1}",
    "Avengers: {A1} {N1}",
    "The Girl With The {A1} Tattoo",
    "A Song of {N1} and {N2}",
    "The Hitchhiker's Guide to the {N1}",
    "To Kill a {N1}",
    "The {A1} Gatsby",
    "The {A1} Heart",
    "War and {N1}",
    "{N1} and Peace",
    "{A1} Fiction",
    "Pan's {N1}",
    "{A1} Encounters of the {A2} Kind",
    "The Lord of the Rings: The Return of the {N1}",
    "The Lord of the Rings: The Fellowship of the {N1}",
    "The Beauty and the {N1}",
    "Live Free or Die {A1}",
    "12 {A1} Men",
    "{N1}busters",
    "{A1} Frankenstein",
    "Almost {A1}",
    "Monty Python and the {A1} {N1}",
    "Eternal Sunshine of the {A1} Mind",
    "Butch Cassidy and the {A1} Kid",
    "The {A1} Lebowski",
    "Some Like It {A1}",
    "A Clockwork {N1}",
    "American {N1}",
    "The {N1} Bride",
    "The {N1} of Music",
    "It's a {A1} Life",
    "Gone With the {N1}",
    "Indiana Jones: Raiders of the Lost {N1}",
    "Night of the {A1} Dead",
    "{A1} Miss Sunshine",
    "The Secret {N1} of Walter Mitty",
    "It's Always {A1} in Philadelphia",
    "{A1}-Cop",
    "The {N1} King",
    "The Scorpion {N1}",
    "Lara Croft: {N1} Raider",
    "The {N1} of Oz",
    "The Lion, the Witch, and the {N1}",
    "{N1} of the Flies",
    "The {N1} of Dr. Caligari",
    "{N1}-Man: Into the {N1}-Verse",
    "{A1} Max: Fury Road",
    "Snow White and the {A1} Dwarfs",
    "E.T. The {A1}-Terrestrial",
    "Call Me by Your {N1}",
    "A {N1} Named Desire",
    "The {A1} Life of Zack and Cody",
    "The {A1} School Bus",
    "Grant Theft {N1}",
    "The Legend of Zelda: {N1} of the Wild",
    "The Legend of Zelda: {N1}waker",
    "The Legend of Zelda: A Link to the {N1}",
    "The Legend of Zelda: Ocarina of {N1}",
    "The Legend of Zelda: Majora's {N1}",
    "Super Mario {N1}",
    "{A1} Souls",
    "{A1} Titans",
    "Howl's Moving {N1}",
    "{N1} Mononoke",
    "My {N1} Totoro",
    "Kiki's {A1} Service",
    "Kiki's {N1} Service",
    "Kiki's Delivery {N1}",
    "Nausicaä of the {N1} of the Wind",
    "Nausicaä of the Valley of the {N1}",
];
const QUOTES = [
    '"E.T. phone {N1}." - E.T. (1982)',
    '"Leave the {N1}. Take the cannoli." - The Godfather (1972)',
    '"Leave the gun. Take the {N1}." - The Godfather (1972)',
    '"Leave the {N1}. Take the {N2}." - The Godfather (1972)',
    '"I love the smell of {N1} in the morning." - Apocalypse Now (1979)',
    '"I am {A1}! It`s the pictures that got small." - Sunset Blvd. (1950)',
    '"I am big! It`s the pictures that got {A1}." - Sunset Blvd. (1950)',
    '"I am {A2}! It`s the pictures that got {A1}." - Sunset Blvd. (1950)',
    '"Hasta la vista, {N1}." - Terminator 2 (1991)',
    '"Pay no attention to that {N1} behind the curtain!" - The Wizard of Oz (1939)',
    '"Pay no attention to that man behind the {N1}!" - The Wizard of Oz (1939)',
    '"Go ahead, make my {N1}." - Sudden Impact (1983)',
    '"I have always depended on the {A1} of strangers." - A Streetcar Named Desire (1951)',
    '"My {A1}." - Lord of the Rings: The Two Towers (2002)',
    '"That`ll do, {N1}. That`ll do." - Babe (1995)',
    '"Gentlemen, you can`t fight in here! This is the {A1} room!" - Dr. Strangelove (1964)',
    '"Badges? We ain`t got no badges! We don`t need no badges! I don`t have to show you any {A1} badges!" - Blazing Saddles (1974)',
    '"It was Beauty killed the {N1}." - King Kong (1933)',
    '"It was {A1} killed the Beast." - King Kong (1933)',
    '"You make me want to be a {A1} man." - As Good as It Gets (1997)',
    '"You make me want to be a better {N1}." - As Good as It Gets (1997)',
    '"Get your stinking paws off me, you damned {A1} {N1}!" - Planet of the Apes (1968)',
    '"Love means never having to say you`re {A1}." - Love Story (1970)',
    '"They may take our lives, but they`ll never take our {N1}!" - Braveheart (1995)',
    '"If you let my {N1} go now, that`ll be the end of it. I will not look for you, I will not pursue you. But if you don`t, I will look for you, I will find you, and I will kill you." - Taken (2008)',
    `"Frankly, my dear, I don't give a {N1}." - Gone With The Wind (1940)`,
    `"You're gonna need a bigger {N1}." - Jaws (1975)`,
    `"A martini. Shaken, not {A1}." - Goldfinger (1964)`,
    `"I see {A1} people." - The Sixth Sense (1999)`,
    `"Well, nobody's {A1}." - Some Like It Hot (1959)`,
    `"It's {A1}! It's {A1}!" - Frankenstein (1931)`,
    `"Houston, we have a {N1}." - Apollo 13 (1995)`,
    `"Carpe diem. Seize the day, boys. Make your lives {A1}." - Dead Poets Society (1989)`,
    `"Nobody puts Baby in a {N1}." - Dirty Dancing (1987)`,
    `"I'll get you, my {A1}, and your little {N1}, too!" - The Wizard of Oz (1939)`,
    `"As God is my witness, I'll never be {A1} again." - Gone With The Wind (1940)`,
    `"There's no {N1} in baseball!" - A League Of Their Own (1992)`,
    `"A boy's best friend is his {N1}." - Psycho (1960)`,
    `"You've got to ask yourself one question: 'Do I feel {A1}?' Well, do ya, punk?" - Dirty Harry (1971)`,
    `"Greed, for a lack of a better word, is {A1}." - Wall Street (1987)`,
    `"Keep your friends close, but your {N1} closer." - The Godfather Part II`,
    `"May the {N1} be with you." - Star Wars (1977)`,
    `"Fasten your seatbelts. It's going to be a {A1} night." - All About Eve (1950)`,
    `"{N1}." - Citizen Kane (1941)`,
    "Red Dead {N1}",
    "Resident {A1}",
    "{A1} Hill",
    "The {N1} of Zelda",
    "Castlevania: {N1} of the Night",
    "Castlevania: Symphony of the {N1}",
    "Super {A1} Bros: Melee",
    "{N1} of Legends",
    "The Twilight {N1}",
    "Breaking {A1}",
    "Buffy the {N1} Slayer",
    "Star Trek: The Next {N1}",
    "Mister Rogers' {N1}",
    "{N1} of Cards",
    "{A1} Detective",
    "True {N1}",
    "{N1} Story",
    "{N1} in the Shell",
    "Ghost in the {N1}",
    "{A1} Hero 6",
    "In A {A1} Mood",
    "In A Sentimental {N1}",
];

// [this line number] - 8 = COUNT (275 - 8 = 267)

module.exports = {
    STORY_PREFIXES: TITLES.concat(QUOTES),
    STORY_FOR_SYNONYMS
}
