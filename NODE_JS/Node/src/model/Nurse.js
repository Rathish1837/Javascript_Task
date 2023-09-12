const mongoose = require('mongoose');
const {v4:uuid} = require('uuid')
const registerSchema = new mongoose.Schema({
  
    _id:{
        type: String,
        default: uuid
    },
    Doctor:{
        type: String        
    },
    Nurse:{
        type: String        
    },
    Name: {
        type: String
    },
    EmployeeID:{
        type:Number
    },
    Department:{
        type:String
    },
    Qualification:{
        type:String
    },
    mobile:{
        type:Number
    },
    active:{
        type: Boolean,
        default: true

    }
});
const register = mongoose.model('Nurse',registerSchema);
module.exports = register;