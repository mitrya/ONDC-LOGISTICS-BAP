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

module.exports.validateOTP = async function(req,res) {
    let email = req.body.email;
    let otp = req.body.otp;
    if(!email||!otp){
        return res.status(400).json({
            error:"There was some error"
        })
    }
    let user = await User.findOne({email});
    if(!user||user.otp_verified){
        return res.status(400).json({
            error:"User not found"
        })
    }
    let otpDoc = await Otp.find({
        user:user._id,
        otp:otp
    });
    if(!otpDoc){
        return res.status(400).json({
            error:"Invalid OTP"
        })
    }
    user.otp_verified = true;
    user.save();
    otpDoc.remove();
    return res.status(200).json({
        message:"OTP Verified Successfully"
    });
}