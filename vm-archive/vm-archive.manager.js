const csv = require('csv-parser');
const fs = require('fs');

const boolUtil = require('../utilities/bool.util');
const randomUtil = require('../utilities/random.util');

function getShowsForDay(date, month) {
    return new Promise(async (resolve, reject) => {
        try {
            const fittingShows = await getShowsForDate(date, month);
            resolve(fittingShows);
        } catch (err) {
            reject(err);
        }
    });
}

function getShowsForAct(act) {
    return new Promise(async (resolve, reject) => {
        try {
            const fittingShows = await getShowsForActName(act);
            resolve(fittingShows);
        } catch (err) {
            reject(err);
        }
    });
}

function getShowsToday() {
    return new Promise(async (resolve, reject) => {
        try {
            const today = new Date();
            const fittingShows = await getShowsForDate(today.getDate(), today.getUTCMonth());
            fittingShows.forEach((show) => {
                populateShowTime(show);
            });
            resolve(fittingShows);
        } catch (err) {
            reject(err);
        }
    });
}

function getShows() {
    return new Promise(async (resolve, reject) => {
        try {
            const initialShows = [];
            fs.createReadStream("vm-archive/vm-shows.csv")
                .pipe(csv())
                .on('data', (show) => {
                    const validShow = boolUtil.hasValue(show) && !boolUtil.isEmpty(show);
                    if (validShow) {
                        initialShows.push(show);
                    }
                })
                .on('end', () => {
                    console.log(initialShows.length + " show(s)...")
                    const convertedShows = convertShows(initialShows);
                    resolve(convertedShows);
                });
        } catch (err) {
            reject(err);
        }
    });
}

function getTweetForShows(shows) {
    const show = randomUtil.pickRandom(shows);
    const shortenedDate = getShortenedDate(show);
    const timeOfDay = show.showTime === "LATE" ? "Tonight" : "Today";
    const soldOut = show.soldOut ? "SOLD OUT " : "";
    const intro = `${timeOfDay} (${show.time} ${shortenedDate}) at the Vaudeville Mews: ${soldOut}`;
    const MAX_TWEET_LENGTH = 280;
    const maxLineupLength = MAX_TWEET_LENGTH - intro.length;
    const lineup = getLineup(show, maxLineupLength);
    return `${intro}${lineup}`;
}

module.exports = {
    getShows,
    getShowsToday,
    getShowsForDay,
    getShowsForAct,
    getTweetForShows,
}

function convertShows(shows) {
    return shows
        .map((show) => {
            show.year = Number(show.year);
            show.date = Number(show.date);
            show.soldOut = boolUtil.translateBooleanString(show.soldOut);
            show.canceled = boolUtil.translateBooleanString(show.canceled);
            show.postponed = boolUtil.translateBooleanString(show.postponed);
            show.acts = show.lineup.split("|")
                .map((act) => {
                    return act.trim();
                });
            delete show.lineup;
            show.fullDate = `${show.month} ${show.date}, ${show.year} at ${show.time}`;
            return show;
        });
}

function getMonthName(monthNumber) {
    const monthNames = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
    ];
    return monthNames[monthNumber];
}

async function getShowsForDate(date, month) {
    const shows = await getShows();
    return shows
        .filter((show) => {
            return show.date === date;
        })
        .filter((show) => {
            return show.month.toLowerCase() === getMonthName(month).toLowerCase();
        });
}

async function getShowsForActName(searchAct) {
    const shows = await getShows();
    return shows
        .filter((show) => {
            return show.acts.some((act) => {
                return act.toLowerCase().includes(searchAct.toLowerCase());
            })
        });
}

function populateShowTime(show) {
    const fullDate = getTime(show.fullDate);
    const hour = getShowHour(fullDate);
    show.showTime = getShowTime((hour));
}

function getTime(fullDate) {
    return fullDate.split("at")[1].trim();
}

function getShowHour(time) {
    const hour = Number(time.split(":")[0]);
    const addTwelve = time.includes("pm") && hour !== 12;
    return addTwelve ? hour + 12 : hour;
}

function getShowTime(hour) {
    if (hour >= 21) {
        // 9pm+ late (21+)
        return "LATE";
    } else if (hour >= 17) {
        // 5pm+ early (17+)
        return "EARLY";
    } else {
        return "SPECIAL";
    }
}

function getShortenedDate(show) {
    const monthName = show.month.toLowerCase();
    const MONTHS = [
        "january", "february", "march", "april",
        "may", "june", "july", "august",
        "september", "october", "november", "december"
    ];
    const monthNumber = MONTHS.indexOf(monthName) + 1;
    return `${monthNumber}-${show.date}-${show.year}`;
}

function getLineup(show, maxLineupLength) {
    let lineup = "";
    show.acts.forEach((act, i) => {
        const notFirst = i > 0;
        let actString = "";
        if (notFirst) {
            actString += ", ";
        }
        actString += act;
        const MORE = "...";
        if (lineup.length + actString.length <= maxLineupLength) {
            lineup += actString;
        } else if (lineup.length + MORE <= maxLineupLength) {
            console.log("Cannot fit act, using '...'");
            lineup += MORE;
        } else {
            console.log("Cannot fit act, unable to use '...'");
        }
    })
    return lineup;
}
