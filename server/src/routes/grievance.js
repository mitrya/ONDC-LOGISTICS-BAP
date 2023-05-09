const express = require('express');
const router = express.Router();
const grievanceController = require('../controllers/grievanceController');

router.post('/grievance',grievanceController.sendGrievance);

module.exports = router;