const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
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



const otp = mongoose.model('otp',otpSchema);

module.exports =  otp;