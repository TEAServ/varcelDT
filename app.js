const express = require('express');
var cors = require('cors');

/////////////////////////////////////////////////////////
const fetch = require("node-fetch");
//const Project_controller  = require('./controllers/Project_controller');
const DT_SensorsRecord_route = require('./routes/DT_SensorsRecord_route')

var app = express();
app.use(cors());

// // 4 make mongo connected
var cron = require('node-cron');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://teaserves:TEA123456789SERV@teaservdt.tlzyu.mongodb.net/DigitalTwin?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true})

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//////////////////////////////////////////////////////////////////////////////////////////////////

DT_SensorsRecord_route(app);





app.use((err, req, res, next)=>{
  // any error should return from response
 // console.log(err.message);
  res.status(422).send({err: err.message})


})
// for index
module.exports = app;
