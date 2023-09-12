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
   
    Name: {
        type: String
    },
    Qualification:{
        type:String
    },
    Department:{
        type:String
    },
    mobile:{
        type:Number
    }
    ,
    city:{
        type:String
    },
    active:{
        type: Boolean,
        default: true
    }
});
const register = mongoose.model('docter',registerSchema);
module.exports = register;