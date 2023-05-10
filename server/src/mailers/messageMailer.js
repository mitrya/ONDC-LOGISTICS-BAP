const nodeMailer = require('../config/nodeMailer');

module.exports.sendMessage = function(message){
    let htmlString = nodeMailer.renderTemplate({messageBody:message.messageBody},'/adminMailer/email_Admin.ejs');

    nodeMailer.transporter.sendMail({
       from:'logigo4u@gmail.com',
       to:'iib2020016@iiita.ac.in',
       subject:"Contact Message",
       html:htmlString
    },function(err,info){
        if(err){
            console.log('There was an error',err);
        }
    });
}

module.exports.sendGrievance = function(message){
    let htmlString = nodeMailer.renderTemplate({messageBody:message.messageBody},'/adminMailer/send_grievance.ejs');
    nodeMailer.transporter.sendMail({
       from:'logigo4u@gmail.com',
       to:'iib2020016@iiita.ac.in',
       subject:"Grievance Message",
       html:htmlString
    },function(err,info){
        if(err){
            console.log('There was an error',err);
        }
    });
}

module.exports.sendOTP = function(message){
    let htmlString = nodeMailer.renderTemplate({messageBody:message.messageBody},'/adminMailer/send_otp.ejs');
    nodeMailer.transporter.sendMail({
       from:'logigo4u@gmail.com',
       to:message.messageBody.email,
       subject:"OTP Verification",
       html:htmlString
    },function(err,info){
        if(err){
            console.log('There was an error',err);
        }
    });
}

module.exports.sendPasswordResetOTP = function(message) {
    let htmlString = nodeMailer.renderTemplate({messageBody:message.messageBody},'/adminMailer/send_password_reset_otp.ejs');
    nodeMailer.transporter.sendMail({
       from:'logigo4u@gmail.com',
       to:message.messageBody.email,
       subject:"Password Reset OTP",
       html:htmlString
    },function(err,info){
        if(err){
            console.log('There was an error',err);
        }
    });
}

module.exports.sendConfirmation = function(message){
    let htmlString = nodeMailer.renderTemplate({messageBody:message.messageBody},'/adminMailer/email_confirmation.ejs');

    nodeMailer.transporter.sendMail({
       from:'logigo4u@gmail.com',
       to:message.messageBody.email,
       subject:"Message Confirmation",
       html:htmlString
    },function(err,info){
        if(err){
            console.log('There was an error',err);
        }
    });
}