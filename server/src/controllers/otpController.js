const User = require('../models/person');
const Otp = require('../models/otp');
const otpGenerator = require('otp-generator');
const messageMailer = require('../mailers/messageMailer'); 

module.exports.generateOTP = async function(req,res){
    try{
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        const email = req.body.signUpDetails.email;
        const user = await User.findOne({email});
        await Otp.deleteMany({user:user._id});
        const otpDoc = await Otp.create({
            user:user._id,
            otp:otp
        });
        const message = {
            messageBody:{
                name:user.name,
                otp:otp,
                email:user.email
            }
        }
        messageMailer.sendOTP(message);
        return res.status(200).json({
            message:"OTP delivered successfully"
        });
    }catch(err){
        console.log(err);
        if(err){
            res.status(400).json({
                error:"Internal Server Error"
            });
        }
    }
}