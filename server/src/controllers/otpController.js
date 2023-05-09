const User = require('../models/person');
const Otp = require('../models/otp');
const otpGenerator = require('otp-generator')

module.exports.generateOTP = function(req,res){
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    return res.json(200).json({
        otp:otp
    });
}