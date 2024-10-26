const express = require('express');
const app = express();
const port = 3000;
const uri = 'mongodb+srv://hohuy2k2:hohuy2k2@cluster0.5qkog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const mongoose = require('mongoose');
var cors = require('cors');
const socketIo= require("socket.io")
const http = require('http');
const classRoute = require('./route/classRoute')
// require('dotenv').config('../.env');
app.use(cors());
app.use(express.json());
mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));
//
app.use(classRoute);
//
// const server = http.createServer(app)
// const io = socketIo(server);

app.listen(port, () => {
    console.log("listening 3000");
});