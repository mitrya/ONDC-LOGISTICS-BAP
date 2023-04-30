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
	const {displayName,email,contact,password} = signUpDetails;
	if(!displayName || !email || !contact || !password) {
		return res.status(404).json({
			error : "All fields are required"
		})
	}
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
				user.save().then((savedUser) => {
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
						address : (saveduser.address) ? saveduser.address : {}
					}
				});
			} else return res.status(422).json({error : "Invalid credentials"});
		})


})

router.post("/updateaddress", async (req,res) => {
	const {email,address} = req.body;
	let user = await User.findOne({email})
	if(!user) {
		return res.status(404).json({
			error: "Error Retreiving user"
		})
	} 
	user.address = address;
	user.save().then(() => {
		res.json({
			message:"Succefully updated your Address",
			user : {
				email:user.email,
				name:user.name,
				address:user.address
			}
		});
	})
	.catch(err => {
		console.log("user saving error",err);
	})
})

module.exports = router