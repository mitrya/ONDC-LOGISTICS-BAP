const express = require('express');
const path = require('path');

const app = express()

app.use(cors({
    origin: 'http://localhost:5173' // for react app
}));

app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')));

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname,'..','public','index.html'));  
})

module.exports=app;