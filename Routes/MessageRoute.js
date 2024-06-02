const express = require('express');
const MessageController = require('../Controllers/MessageController');
const router = express.Router();

router.post('/messages', MessageController.createMessage);
router.get('/messages/:userId/:recipientId', MessageController.getMessages);
router.delete('/messages/:id', MessageController.deleteMessage);

module.exports = router;