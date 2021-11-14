
const SensorsRecord = require('../models/DT_SensorsRecord_model');
const Device = require('../models/DT_Device_model');
const Sensor = require('../models/DT_Sensor_model');

const Task = require('../models/Task_model');
const Department = require('../models/Department_model');
const { Mongoose } = require('mongoose');
const  mongoose  = require('mongoose');
//contain all business logic
module.exports = {
 
  TEST(req, res, next){
    var rrr = req.body;
    var qqq = {...rrr, 
    sstate:"OK"
    }
    res.status(200).send(qqq);
  },
  Edit_Sensors_Record(req, res, next){//post

    var readings = req.body;
    var dataArr = [];
    for (var key in readings) 
    {
      var splitArr = readings[key].split(",");
      var sensorData = 
      {
        SensorID:splitArr[0],
        SensorName:splitArr[1],
        V:splitArr[2],
        Unit:splitArr[3]
      }
      dataArr = [...dataArr,sensorData];
    }
    var now = new Date();
    console.log(now);
    var newReading = 
    {
      Time : now,
      SensorsData : dataArr
    }
    var id_arr = [];
    for (let i = 0; i < dataArr.length; i++) {
      id_arr = [...id_arr,dataArr[i].SensorID]
      
    }
    SensorsRecord.findByIdAndUpdate({_id: "617a68f0038a40196f481513"}, newReading).then(ress => 
    {

      Device.find({}).then(devices => {




        Sensor.find({'_id':{$in:id_arr}}).then(sensors => {
          for (let j = 0; j < sensors.length; j++) {
            console.log(j);
            var addedRecord = 
            {
              T:now,
              V:dataArr[j].V
            }
            console.log(addedRecord);
            var rrr = [...sensors[j].Readings, addedRecord]
            console.log(rrr);
            Sensor.findByIdAndUpdate({_id: id_arr[j]}, {Readings :rrr}).then(resss =>{console.log(resss);}).catch(next);
          }
          var D = {}
          for (let q = 0; q < devices.length; q++) {
           
            D[`d${q}`] = devices[q].State;

            
          }
          res.status(200).send(D);

        }).catch(next);
        
        
        


      }).catch(next);


    }).catch(next);

  },

  Get_Sensors_Record(req, res, next){//get
  
    SensorsRecord.find({'_id':"617a68f0038a40196f481513"}).then(records => {

      res.status(200).send(`${records[0].SensorsData[0].V},${records[0].SensorsData[1].V}`);
    }).catch(next);
  },
  Edit_Device_State_fire(req, res, next){//get
  var newVal = req.query.statee;
    Device.findByIdAndUpdate({_id: "617a6705038a40196f481511"},{State:newVal}).then(d => {
      res.status(200).send("done");
    }).catch(next);
  }


};
