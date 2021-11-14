const { Date } = require('mongoose');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DeviceSchema = new Schema({

  Name: {
    type: String,
    required: true
  },
  IsDigitalValue: {
    type: Boolean,
    required: true
  },
  State: {
    type: Number,
    default: 0
  },
  
});

const Device = mongoose.model('Device', DeviceSchema,'Device');

module.exports = Device;
