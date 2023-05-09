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
// const {MONGO_URI} = process.env;
// const MONGO_URI = 'mongodb+srv://miniPROJ:AAKPV@2023@cluster0.jc8n4yz.mongodb.net/?retryWrites=true&w=majority'
dotenv.config();
//asdsa
mongoose.connect(

	'mongodb+srv://miniPROJ:AAKPV2023@cluster1.l81voxo.mongodb.net/?retryWrites=true&w=majority',{
	// 'mongodb://127.0.0.1:27017/courier_app',{
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

app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
	credentials: true
}));
	
app.set('views','./views');    // specify a folder to look for the views.




app.use(require("./routes/auth"));
app.use(require("./routes/order"));
app.use(require('./routes/email'));


async function startServer() {
    
  app.listen(PORT,()=>{
      console.log(`Listening on port ${PORT}...`)
  })    
}

startServer();