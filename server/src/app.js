const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express()
const cors = require('cors');
const dotenv = require('dotenv')
require('./models/person'); 
require('./models/order')
const mongoose = require('mongoose');
const stripe =require('stripe');
require('dotenv').config();

mongoose.connect(

	process.env.MONGO_URI,{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
)
.then(() => {
	console.log("mongodb connection established!");
})
.catch((err) => {
	console.log("error ",err);
});
	

app.use(express.json())

// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
//  })
 

app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
	// credentials: true
}));
	
app.set('views','./views');    // specify a folder to look for the views.




app.use(require("./routes/auth"));
app.use(require("./routes/order"));
app.use(require('./routes/email'));
app.use(require('./routes/grievance'));
app.use(require('./routes/otp'));


async function startServer() {
    
  app.listen(PORT,()=>{
      console.log(`Listening on port ${PORT}...`)
  })    
}

startServer();