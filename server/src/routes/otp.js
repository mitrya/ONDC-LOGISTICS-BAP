const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/generate',otpController.generateOTP);
router.post('/validate',otpController.validateOTP);


module.exports = router;