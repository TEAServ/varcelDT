const User_controller  = require('../controllers/User_controller');
const DT_SensorsRecord_controller  = require('../controllers/DT_SensorsRecord_controller');
// const middleware= require('./middleware');
module.exports = (app) =>{
  



  app.post('/TEST',
  DT_SensorsRecord_controller.TEST);
  app.post('/EditSensorsRecord',
  DT_SensorsRecord_controller.Edit_Sensors_Record);
  app.get('/GetSensorsRecord',
  DT_SensorsRecord_controller.Get_Sensors_Record);
  app.get('/editFire',
  DT_SensorsRecord_controller.Edit_Device_State_fire);
  


}
