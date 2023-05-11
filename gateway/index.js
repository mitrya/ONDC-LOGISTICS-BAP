const express = require('express');
const port = 9000;
const app = express()
const cors = require('cors')

app.use(express.json())


app.use(cors({
    origin: '*' ,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    // credentials: true
	
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