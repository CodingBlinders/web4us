const Event = require('../Models/EventModel');

async function createEvent(req, res) {
    console.log(req.body)

    try {
        const {name, area, description, startDate, endDate, location, telephoneNumber, numberOfVolunteers, skills, ageRestrictions, registrationLink, notes, deadline, photoUrl} = req.body;

        const publisherId = req.user._id;
        const publisherName = req.user.name;

        const newEvent = new Event({
            name,
            area,
            publisherId,
            description,
            startDate,
            endDate,
            location,
            telephoneNumber,
            numberOfVolunteers,
            skills,
            ageRestrictions,
            registrationLink,
            notes,
            deadline,
            photoUrl,
        });

        const savedEvent = await newEvent.save();
        res.json(savedEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a Event Event' });
    }
};

async function getEvents(req, res) {
    try {
        const events = await Event.find();
        // sort using startDate
        events.sort((a, b) => a.startDate - b.startDate);
        //for all events make remainingDates using startDate - current date
        events.forEach(event => {
            event.remainingDays = Math.ceil((event.startDate - new Date()) / (1000 * 60 * 60 * 24));
        });
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get events' });
    }
}

//search event by id

async function getEventById(req, res) {
    console.log(req.params);
    try {
        console.log(req.params);
        const event = await Event.findOne({ _id: req.params.eventId });
        res.json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get event' });
    }
}

module.exports = {
    createEvent, getEvents, getEventById
};