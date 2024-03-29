const mongoose = require('mongoose');
require('./NewsPost.model');
const NewsPost = mongoose.model('newsPost');
require('./CalendarEvent.model');
const CalendarEvent = mongoose.model('calendarEvent');
require('./CouncilMeeting.model');
const CouncilMeeting = mongoose.model('councilMeeting');
require('./AgendaVersion.model');
const AgendaVersion = mongoose.model('agendaVersion');

function getAllNewsPosts() {
    return new Promise((resolve, reject) => {
        console.log("Retrieving news posts...");
        NewsPost.find({})
            .sort({found_date: -1})
            .then((items) => {
                console.log("Retrieved news posts...");
                resolve(items);
            });
    });
}

function checkNewsPost(newsPostId) {
    return new Promise((resolve, reject) => {
        NewsPost.findOne({_id: newsPostId})
            .then((item) => {
                checkItem(item, resolve, reject);
            });
    });
}

function saveNewsPost(newsPost) {
    return new Promise((resolve, reject) => {
        const message = "News Post found. ";
        const logMessage = getLogMessage(message);
        new NewsPost({
            url: newsPost.url,
            heading_title: newsPost.heading_title,
            heading_date: newsPost.heading_date,
            page_title: newsPost.page_title,
            page_content: newsPost.page_content,
            checked: false,
            check_message: message,
            check_message_log: [logMessage]
        })
            .save()
            .then((item) => {
                resolve(item);
            });
    });
}

function getAllCalendarEvents() {
    return new Promise((resolve, reject) => {
        CalendarEvent.find({})
            .sort({found_date: -1})
            .then((items) => {
                resolve(items);
            });
    });
}

function checkCalendarEvent(calendarEventId) {
    return new Promise((resolve, reject) => {
        CalendarEvent.findOne({_id: calendarEventId})
            .then((item) => {
                checkItem(item, resolve, reject);
            });
    });
}

function saveCalendarEvent(calendarEvent) {
    return new Promise((resolve, reject) => {
        const message = "Calendar Event found. ";
        const logMessage = getLogMessage(message);
        new CalendarEvent({
            day: calendarEvent.day,
            month: calendarEvent.month,
            year: calendarEvent.year,
            name: calendarEvent.name,
            time: calendarEvent.time,
            detail: calendarEvent.detail,
            duration: calendarEvent.duration,
            contact_name: calendarEvent.contact_name,
            contact_phone: calendarEvent.contact_phone,
            is_notable: calendarEvent.is_notable,
            checked: false,
            check_message: message,
            check_message_log: [logMessage]
        })
            .save()
            .then((item) => {
                resolve(item);
            });
    });
}

function getAllCouncilMeetings() {
    return new Promise((resolve, reject) => {
        CouncilMeeting.find({})
            .sort({found_date: -1})
            .then((items) => {
                resolve(items);
            });
    });
}

function checkCouncilMeeting(councilMeetingId) {
    return new Promise((resolve, reject) => {
        CouncilMeeting.findOne({_id: councilMeetingId})
            .then((item) => {
                checkItem(item, resolve, reject);
            });
    });
}

function saveCouncilMeeting(councilMeeting) {
    return new Promise((resolve, reject) => {
        const message = "Council Meeting found. ";
        const logMessage = getLogMessage(message);
        new CouncilMeeting({
            day: councilMeeting.day,
            month: councilMeeting.month,
            year: councilMeeting.year,
            time: councilMeeting.time,

            url: councilMeeting.url,
            title: councilMeeting.title,
            subtitle: councilMeeting.subtitle,
            links: councilMeeting.links,

            checked: false,
            check_message: message,
            check_message_log: [logMessage]
        })
            .save()
            .then((item) => {
                resolve(item);
            });
    });
}

function updateCouncilMeeting(id, newItem) {
    return new Promise((resolve, reject) => {
        CouncilMeeting.findOne({_id: id})
            .then((originalItem) => {
                let updateMessage = "Council Meeting updated. ";

                updateMessage = updateField(updateMessage, "day", originalItem, newItem,);
                updateMessage = updateField(updateMessage, "month", originalItem, newItem,);
                updateMessage = updateField(updateMessage, "year", originalItem, newItem,);
                updateMessage = updateField(updateMessage, "time", originalItem, newItem,);

                updateMessage = updateField(updateMessage, "url", originalItem, newItem,);
                updateMessage = updateField(updateMessage, "title", originalItem, newItem,);
                updateMessage = updateField(updateMessage, "subtitle", originalItem, newItem,);
                updateMessage = updateFieldForList(updateMessage, "links", originalItem, newItem,);

                // Set to unchecked, with Update Message
                originalItem.checked = false;
                originalItem.check_message += updateMessage;
                const logMessage = getLogMessage(updateMessage);
                originalItem.check_message_log.push(logMessage)

                originalItem.save()
                    .then((resultItem) => {
                        resolve(resultItem);
                    });
            });
    });
}

function getAllAgendaVersions() {
    return new Promise((resolve, reject) => {
        AgendaVersion.find()
            .sort({found_date: -1})
            .then((items) => {
                resolve(items);
            });
    });
}

function getAgendaVersions(code) {
    return new Promise((resolve, reject) => {
        AgendaVersion.find({meeting_code: code})
            .sort({found_date: -1})
            .then((items) => {
                resolve(items);
            });
    });
}

function saveAgendaVersion(item) {
    return new Promise((resolve, reject) => {
        AgendaVersion.find({meeting_code: item.meeting_code})
            .then((items) => {
                const message = "Agenda Version found. ";
                const logMessage = getLogMessage(message);
                const version = items.length + 1;

                new AgendaVersion({
                    meeting_code: item.meeting_code,
                    plaintext: item.plaintext,

                    version: version,

                    links: item.links,
                    intro_text: item.intro_text,
                    item_text: item.item_text,
                    closing_text: item.closing_text,

                    checked: false,
                    check_message: message,
                    check_message_log: [logMessage]
                })
                    .save()
                    .then((item) => {
                        resolve(item);
                    });
            });
    });
}

function checkAgendaVersion(agendaVersionId) {
    return new Promise((resolve, reject) => {
        AgendaVersion.findOne({_id: agendaVersionId})
            .then((item) => {
                checkItem(item, resolve, reject);
            });
    });
}

module.exports = {
    saveNewsPost,
    getAllNewsPosts,
    checkNewsPost,
    saveCalendarEvent,
    getAllCalendarEvents,
    checkCalendarEvent,
    saveCouncilMeeting,
    getAllCouncilMeetings,
    checkCouncilMeeting,
    updateCouncilMeeting,
    getAllAgendaVersions,
    getAgendaVersions,
    saveAgendaVersion,
    checkAgendaVersion,
}

function checkItem(item, resolve, reject) {
    if (item) {
        item.checked = true;
        item.check_message = "";
        const logMessage = getLogMessage("Checked. ");
        item.check_message_log.push(logMessage);
        item.save()
            .then((updatedItem) => {
                resolve(updatedItem);
            });
    } else {
        reject({
            message: `Failed to check item.`
        });
    }
}

function getLogMessage(message) {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString('en-US', {timeZone: 'America/Chicago'});
    return `${message} @ ${dateTimeString}`;
}

function updateField(updateMessage, field, originalItem, newItem) {
    if (originalItem[field] !== newItem[field]) {
        updateMessage += `${field} updated from {${originalItem[field]}} to {${newItem[field]}}. `;
        originalItem[field] = newItem[field];
    }
    return updateMessage;
}

function updateFieldForList(updateMessage, field, originalItem, newItem) {
    // Temp fix because the list of links (usually like ["link"]) was coming in as a single string (like "link)
    if (typeof newItem[field] === 'string') {
        newItem[field] = [newItem[field]];
    }
    if (originalItem[field] !== newItem[field]) {
        const itemsRemoved = originalItem[field]
                .filter((o) => newItem[field]
                .indexOf(o) === -1);
        const itemsAdded = newItem[field]
                .filter((o) => originalItem[field]
                .indexOf(o) === -1);
        updateMessage += `${field} updated from ${originalItem[field].length} to ${newItem[field].length} item(s), added [${itemsAdded}], removed [${itemsRemoved}]. `;
        originalItem[field] = newItem[field];
    }
    return updateMessage;
}
