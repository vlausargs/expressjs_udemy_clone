require('dotenv').config('./env')

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.port || 9000

app.use(cors())
app.use(express.json());

//path

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true})
.then(()=>console.log("callback connect db"))
.catch(err => console.log(err))

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}` );
});
