const { get } = require('mongoose');
const Application = require('../Models/ApplicationModel'); 
const Event = require('../Models/EventModel');

async function createApplication(req, res) {
    try {
        // Extract data from the request body
        const { event_id } = req.body;
        const user_id = req.user._id;

        //search the eventId in the database and get the publisherId from it
        const event = await Event.findOne({ _id: event_id });
        const organization_id = event.publisherId;
        

        // Validate required fields
        if (!event_id || !user_id || !organization_id) {
            return res.status(400).json({ message: 'Event ID, User ID, and Organization ID are required.' });
        }

        // Create a new application instance
        const newApplication = new Application({
            event_id,
            user_id,
            organization_id
        });

        // Save the application to the database
        const savedApplication = await newApplication.save();

        // Respond with the saved application
        res.status(201).json(savedApplication);
    } catch (error) {
        // Handle errors and send an error response
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// module.exports = createApplication;

getApplications = async (req, res) => {
    try {
        const organization_id = req.user._id;
        //get all applications with the organization_id add event_id and the event name and user name
        const applications = await Application.find({organization_id: organization_id}).populate('event_id').populate('user_id');
        res.json(applications);
        // const applications = await Application.find();
        // res.json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get applications' });
    }
}

module.exports = {
    createApplication
};
