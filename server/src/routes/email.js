const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/message',messageController.sendMessage);

module.exports = router;