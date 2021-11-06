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
    let lineup = "";
    show.acts.forEach((act, i) => {
        if (i > 0) {
            lineup += ", ";
            if (i === show.acts.length - 1) {
                lineup += "and ";
            }
        }
        lineup += act;
    })
    return `This day (${show.month} ${show.date}, ${show.year} @ ${show.time}) at the Vaudeville Mews: ${lineup}`;
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
