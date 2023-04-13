const express = require('express');
const port = 9000;
const app = express()
const cors = require('cors')

app.use(express.json())


app.use(cors({
	methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],origin: '*' // for react app
  }));


app.use('/',require('./routes/index.js'))



app.listen(port,function(err){
	if(err){
		console.log('Error in starting the server, ',err);
		return;
	}
	else{
		console.log(`Server is running successfully on port ${port}`);
	}
})