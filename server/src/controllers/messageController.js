const messageMailer = require('../mailers/messageMailer');
const messageAdminWorker = require('../workers/message_email_worker');
const queue = require('../config/kue');

module.exports.sendMessage = function(req,res) {
    if(!req.body.messageBody.name||!req.body.messageBody.email||!req.body.messageBody.content){
        return res.status(400).json({
            error:"All Fields are required"
        });
    }
    else{
        let job = queue.create('messageAdmin',req.body).priority('normal').save(function(err){
            if(err){
                return res.status(400).json({
                    error:"There was an error"
                });
            }
            else{
                return res.status(200).json({
                    message:"Message delivered successfully"
                });
            }
        });
    }
} 