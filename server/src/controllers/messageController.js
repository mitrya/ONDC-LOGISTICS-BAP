const messageMailer = require('../mailers/messageMailer');

module.exports.sendMessage = function(req,res) {
    if(!req.body.messageBody.name||!req.body.messageBody.email||!req.body.messageBody.content){
        console.log('Line 6');
        return res.status(400).json({
            error:"All Fields are required"
        });
    }
    else{
        try{
            messageMailer.sendMessage(req.body);
            messageMailer.sendConfirmation(req.body);
            return res.status(200).json({
                message:"Message delivered successfully"
            });
        }
        catch(err){
            if(err){
                return res.status(400).json({
                    error:"There was an error"
                });
            }
        }
    }
} 