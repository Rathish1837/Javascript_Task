const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    // _id:{
    //     type: String,
    // },
    firstName: {
        type: String
    },
    lastName:{
        type:String
    },
    mobile:{
        type:Number
    }
});
const register = mongoose.model('register',registerSchema);
module.exports = register;