// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time-eg-2-seconds-ago-one-week-ago-etc-best
function have24HoursPast(previousTime) {
    const currentTime = new Date();
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const elapsed = currentTime - previousTime;

    const hoursPast = Math.round(elapsed / msPerHour);
    return hoursPast > 24;
}

// https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
function getDateString(date) {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();

    const year = date.getFullYear();
    const month = (mm>9 ? '' : '0') + mm;
    const day = (dd>9 ? '' : '0') + dd;
    return [year, month, day].join('-');
}

module.exports = {
    have24HoursPast,
    getDateString,
}
