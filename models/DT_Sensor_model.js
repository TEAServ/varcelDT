const { Date } = require('mongoose');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SensorSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Unit: {
    type: String,
    required: true
  },
  Property: {
    type: Number,
    required: true
  },
  Port: {
    type: Number,
    required: true
  },
  Readings: {
    type: Array,
    required: true
  }
  
});

const Sensor = mongoose.model('Sensor', SensorSchema,'Sensor');

module.exports = Sensor;
