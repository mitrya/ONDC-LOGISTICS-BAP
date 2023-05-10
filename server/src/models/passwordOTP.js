const mongoose = require('mongoose');

const passwordOTPSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    otp:{
        type:String,
        required:true
    }
});



const passwordOTP = mongoose.model('passwordOTP',passwordOTPSchema);

module.exports =  passwordOTP;