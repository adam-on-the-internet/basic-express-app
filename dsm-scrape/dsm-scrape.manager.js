const mongoose = require('mongoose');
require('./NewsPost.model');
const NewsPost = mongoose.model('newsPost');
require('./CalendarEvent.model');
const CalendarEvent = mongoose.model('calendarEvent');
require('./CouncilMeeting.model');
const CouncilMeeting = mongoose.model('councilMeeting');

function getAllNewsPosts() {
    return new Promise((resolve, reject) => {
        NewsPost.find({})
            .then((items) => {
                resolve(items);
            });
    });
}

function getAllCalendarEvents() {
    return new Promise((resolve, reject) => {
        CalendarEvent.find({})
            .then((items) => {
                resolve(items);
            });
    });
}

function getAllCouncilMeetings() {
    return new Promise((resolve, reject) => {
        CouncilMeeting.find({})
            .then((items) => {
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

function checkCalendarEvent(calendarEventId) {
    return new Promise((resolve, reject) => {
        CalendarEvent.findOne({_id: calendarEventId})
            .then((item) => {
                checkItem(item, resolve, reject);
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

function saveNewsPost(newsPost) {
    return new Promise((resolve, reject) => {
        new NewsPost({
            url: newsPost.url,
            heading_title: newsPost.heading_title,
            heading_date: newsPost.heading_date,
            page_title: newsPost.page_title,
            page_content: newsPost.page_content,
            checked: false,
        })
            .save()
            .then((item) => {
                resolve(item);
            });
    });
}

function saveCalendarEvent(calendarEvent) {
    return new Promise((resolve, reject) => {
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
        })
            .save()
            .then((item) => {
                resolve(item);
            });
    });
}

function saveCouncilMeeting(calendarEvent) {
    return new Promise((resolve, reject) => {
        new CouncilMeeting({
            day: calendarEvent.day,
            month: calendarEvent.month,
            year: calendarEvent.year,
            time: calendarEvent.time,
            url: calendarEvent.url,
            title: calendarEvent.title,
            subtitle: calendarEvent.subtitle,
            links: calendarEvent.links,
            checked: false,
        })
            .save()
            .then((item) => {
                resolve(item);
            });
    });
}

module.exports = {
    saveNewsPost,
    saveCalendarEvent,
    saveCouncilMeeting,
    getAllNewsPosts,
    getAllCalendarEvents,
    getAllCouncilMeetings,
    checkNewsPost,
    checkCalendarEvent,
    checkCouncilMeeting,
}

function checkItem(item, resolve, reject) {
    if (item) {
        item.checked = true;
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
