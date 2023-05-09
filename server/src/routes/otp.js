const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/otp/generate',otpController.generateOTP);


module.exports = router;