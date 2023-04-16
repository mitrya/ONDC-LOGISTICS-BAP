const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken');
const User = require('../models/person');
const JWT_SECRET = 'secRET';// require(process.env)

router.post("/signup",(req,res) => {
	const {signUpDetails,address} = req.body;
	// console.log(signUpDetails,address);
	// return res.status(200)
;	const {displayName,email,contact,password} = signUpDetails;
	User.findOne( {email})
		.then(savedUser => {
			if(savedUser) {
				 return res.json({
					error : "Contact details are already registered, Please sign in or use different email and password"
				})
			}
			bcrypt.hash(password,12).then((hashedpassword) => {
				const user = new User({
					name:displayName,
					email,
					phone:contact,
					address,
					password : hashedpassword
				});
				user.save().then((user) => {
					res.json({message:"Registration Successful"});
				})
				.catch(err => {
					console.log("user saving error",err);
				})
			})

		}) 
		.catch(err => {
			console.log(err);
		})
})

router.post("/signin", async (req,res) => {
	const {email,password} = req.body;
	saveduser =  await User.findOne({email:email})

	if(!saveduser) {
		return res.json({error : "User not registered" });
	}

	bcrypt.compare(password,saveduser.password)
		.then((doMatch) => {
			if(doMatch) {
				const token  = jwt.sign({id : saveduser._id},JWT_SECRET);
				return res.json({
					message:"Login Successful",
					token,
					user : {
						name: saveduser.name,
						email: saveduser.email,
						
					}
				});
			} else return res.status(422).json({error : "Invalid credentials"});
		})


})

module.exports = router