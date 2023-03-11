const mongoose = require('mongoose');
const {MONGO_URI} = require("../config/db.env");

mongoose
	.connect(
		MONGO_URI,{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("connection established!");
	})
	.catch((err) => {
		console.log("error ",err);
	});
