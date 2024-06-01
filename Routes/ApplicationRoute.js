const express = require('express');
const router = express.Router();
const { createApplication } = require('../Controllers/ApplicationController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

// router.get('/', viewEvents);
router.post('/create', authenticate, createApplication);


module.exports = router;
