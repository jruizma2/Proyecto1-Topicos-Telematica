const express = require('express');
const cors = require("cors");
const path = require("path");
const mongoose = require('mongoose');
// const bodyParser = require("body-parser");
require ('dotenv').config();
const app = express();
const PORT = process.env.PORT ||5000;

app.use(cors());
app.use(express.json());
//app.use(bodyParser.json);

//Import Routes
const coordinatesRoute = require('./routes/coordinates');
const usersRoute = require('./routes/users');

//Routes
app.get('/',(req,res) =>{ 
    res.send("Home");
});

//set static folder
//app.use(express.static(path.join(__dirname,"public")));

app.use('/coordinates',coordinatesRoute);
app.use('/users',usersRoute);
//Conect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB Connected");
});
//Start listening to server on PORT
app.listen(PORT,() => console.log(`Server started on port ${PORT}`));