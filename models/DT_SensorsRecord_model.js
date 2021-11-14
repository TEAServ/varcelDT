const { Date } = require('mongoose');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SensorsRecordSchema = new Schema({
  Time: {
    type: Date,
    required: true
  },
  SensorsData: {
    type: Array,
    required: true
  }
  
});

const SensorsRecord = mongoose.model('SensorsRecord', SensorsRecordSchema,'SensorsRecord');

module.exports = SensorsRecord;
