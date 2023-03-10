const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express()
const cors = require('cors');
require('./models/person'); 
require('./models/order')

app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],origin: '*' // for react app
}));


app.use(express.json())

app.use(require("./routes/auth"));
app.use(require("./routes/order"));


async function startServer() {
    
  app.listen(PORT,()=>{
      console.log(`Listening on port ${PORT}...`)
  })    
}

startServer();