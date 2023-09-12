const mongoose = require('mongoose');
const {v4:uuid} = require('uuid')
const registerSchema = new mongoose.Schema({
  
    _id:{
        type: String,
        default: uuid
    },
   
    Nurse:{
        type: String        
    },
    Name: {
        type: String
    },
   PatientID:{
        type:Number
    },
    mobile:{
        type:Number
    },
    active:{
        type: Boolean,
        default: true

    }
});
const register = mongoose.model('Patient',registerSchema);
module.exports = register;