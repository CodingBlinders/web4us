const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your Event Name is required"],
    },
    area: {
        type: String,
        required: true,
    },
    publisherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    telephoneNumber: {
        type: String,
        required: true,
    },
    numberOfVolunteers: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    ageRestrictions: {
        type: String,
        required: true,
    },
    registrationLink: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    deadline: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Event', BlogSchema);
