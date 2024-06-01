const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEventById } = require('../Controllers/EventController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

// router.get('/', viewEvents);
router.post('/create', authenticate, createEvent);
// router.put('/update/:blogId', authenticate, updateBlog);
// router.delete('/delete/:blogId', authenticate, deleteBlog);
// router.get('/all', authenticate, allBlogs);
router.get('/getEvents', getEvents);
router.get('/getEvent/:eventId', getEventById);

module.exports = router;
