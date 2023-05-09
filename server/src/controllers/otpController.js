const User = require('../models/person');
const Otp = require('../models/otp');
const otpGenerator = require('otp-generator')

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

    }catch(err){
        console.log(err);
        if(err){
            res.status(400).json({
                error:"Internal Server Error"
            });
        }
    }
}