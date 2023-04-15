const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express()
const cors = require('cors');
require('./models/person'); 
require('./models/order')
const mongoose = require('mongoose');
// const {MONGO_URI} = process.env;
// const MONGO_URI = 'mongodb+srv://miniPROJ:AAKPV@2023@cluster0.jc8n4yz.mongodb.net/?retryWrites=true&w=majority'

mongoose
	.connect(
		// 'mongodb+srv://miniPROJ:AAKPV2023@cluster0.7sn4kdq.mongodb.net/?retryWrites=true&w=majority',{
			'mongodb://127.0.0.1:27017/courier_app',{
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


app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],origin: '*' // for react app
}));

app.set('view engine','ejs');  //set up the view engine
app.set('views','./views');    // specify a folder to look for the views.



app.use(express.json())

app.use(require("./routes/auth"));
app.use(require("./routes/order"));
app.use(require('./routes/email'));


async function startServer() {
    
  app.listen(PORT,()=>{
      console.log(`Listening on port ${PORT}...`)
  })    
}

startServer();