// save new order 
// fetch all prev orders
// update order : cancel track 
const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken');
const User = require('../models/person');
const JWT_SECRET = 'secRET';// require(process.env)


router.post("/submit",async (req,res) => {
	console.log(req.body)
})

module.exports = router